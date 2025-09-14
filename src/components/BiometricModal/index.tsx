// src/components/BiometricModal.tsx
import React, { useState, useEffect } from 'react';
import { Animated, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';
import ReactNativeBiometrics from 'react-native-biometrics';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { translate } from '../../lang';
import colors from '../../theme/colors';
import { FingerPrinter } from '../../helpers';
import SvgWrapper from '../SvgWrapper';
import styles from './styles';
import { useAuth } from '../../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL } from '../../constants';

interface BiometricModalProps {
    isVisible: boolean;
    onClose: () => void;
    email?: string;
}

const BiometricModal: React.FC<BiometricModalProps> = ({ isVisible, onClose, email }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [biometricsAvailable, setBiometricsAvailable] = useState(false);
    const [biometryType, setBiometryType] = useState<string | null>(null);
    const [challengeData, setChallengeData] = useState<{ challengeId: string; challenge: string } | null>(null);
    const [needsRegistration, setNeedsRegistration] = useState(false);
    const slideAnim = useState(new Animated.Value(0))[0];
    const { login } = useAuth();

    useEffect(() => {
        console.log('BiometricModal useEffect - isVisible:', isVisible, 'email:', email);
        if (!isVisible || !email) {
            console.log('Modal no visible o email no proporcionado');
            setBiometricsAvailable(false);
            return;
        }

        console.log('Verificando disponibilidad de biometría...');
        const rnBiometrics = new ReactNativeBiometrics();
        rnBiometrics.isSensorAvailable()
            .then(async ({ available, biometryType, error }) => {
                console.log('Resultado de isSensorAvailable:', { available, biometryType, error });
                if (available && biometryType) {
                    setBiometricsAvailable(true);
                    setBiometryType(biometryType);
                    console.log(`Biometría disponible: ${biometryType}`);
                    try {
                        console.log('Solicitando challenge para:', email);
                        const response = await axios.post(`${API_BASE_URL}/auth/biometric/challenge`, { email });
                        setChallengeData(response.data);
                        console.log('Challenge obtenido:', response.data);

                        console.log('Verificando si existen claves biométricas en el dispositivo...');
                        try {
                            const { keysExist, error: keysError } = await rnBiometrics.biometryKeysExist();
                            console.log('Resultado de biometryKeysExist:', { keysExist, keysError });
                            if (!keysExist) {
                                console.log('No hay claves en el dispositivo, forzando registro');
                                setNeedsRegistration(true);
                            } else {
                                console.log('Claves biométricas existen, procediendo a login');
                            }
                        } catch (keysErr) {
                            console.log('Error al verificar claves:', keysErr);
                            setNeedsRegistration(true);
                        }

                        Animated.timing(slideAnim, {
                            toValue: 1,
                            duration: 300,
                            useNativeDriver: true,
                        }).start();
                    } catch (err: any) {
                        console.log('Error al obtener challenge:', err.response?.data || err.message);
                        if (err.response?.data?.message === 'Usuario no encontrado o sin clave biométrica registrada') {
                            console.log('Usuario necesita registrar biometría');
                            setNeedsRegistration(true);
                        } else {
                            console.log('Error no manejado, mostrando Toast');
                            Toast.show({
                                type: 'error',
                                text1: translate('errorRegister.title'),
                                text2: err.response?.data?.message || translate('errorRegister.subTitle'),
                                visibilityTime: 3000,
                                autoHide: true,
                                text1Style: { color: colors.black },
                                text2Style: { color: colors.black },
                            });
                        }
                    }
                } else {
                    console.log('Biometría no disponible', { error: error || 'No se detectó hardware biométrico' });
                    setBiometricsAvailable(false);
                    onClose();
                }
            })
            .catch(err => {
                console.log('Error al verificar biometría:', err.message);
                setBiometricsAvailable(false);
                onClose();
            });
    }, [slideAnim, onClose, email, isVisible]);

    const handleRegisterBiometric = async () => {
        try {
            setIsLoading(true);
            const rnBiometrics = new ReactNativeBiometrics();
            await rnBiometrics.deleteKeys();
            console.log('Claves biométricas antiguas eliminadas');
            const { publicKey } = await rnBiometrics.createKeys({
                promptMessage: translate('AuthenticateWithBiometrics'),
            });
            if (!publicKey) {
                throw new Error('No se pudo generar la clave pública');
            }

            console.log('Registrando clave biométrica para:', email);
            await axios.post(`${API_BASE_URL}/auth/biometric/register`, {
                email,
                publicKey,
            });
            console.log('Clave biométrica registrada para:', email);
            Toast.show({
                type: 'success',
                text1: translate('successRegister.title'),
                text2: 'Clave biométrica registrada',
                visibilityTime: 3000,
                autoHide: true,
                text1Style: { color: colors.black },
                text2Style: { color: colors.black },
            });

            const response = await axios.post(`${API_BASE_URL}/auth/biometric/challenge`, { email });
            setChallengeData(response.data);
            setNeedsRegistration(false);
        } catch (error: any) {
            console.log('Error al registrar biometría:', error.message);
            Toast.show({
                type: 'error',
                text1: translate('errorRegister.title'),
                text2: error.message || translate('errorRegister.subTitle'),
                visibilityTime: 3000,
                autoHide: true,
                text1Style: { color: colors.black },
                text2Style: { color: colors.black },
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleBiometricLogin = async () => {
        if (!email) {
            console.log('Falta email para autenticación');
            return;
        }
        try {
            setIsLoading(true);

            // Solicitar un challenge fresco antes de intentar la autenticación
            console.log('Solicitando nuevo challenge para:', email);
            const challengeResponse = await axios.post(`${API_BASE_URL}/auth/biometric/challenge`, { email });
            const newChallengeData = challengeResponse.data;
            setChallengeData(newChallengeData);
            console.log('Nuevo challenge obtenido:', newChallengeData);

            const rnBiometrics = new ReactNativeBiometrics();
            const { success, signature, error } = await rnBiometrics.createSignature({
                promptMessage: translate('AuthenticateWithBiometrics'),
                payload: newChallengeData.challenge,
            });

            if (success && signature) {
                console.log('Autenticación biométrica local exitosa', {
                    biometryType,
                    signature,
                    challengeId: newChallengeData.challengeId,
                    timestamp: new Date().toISOString(),
                });
                const response = await axios.post(`${API_BASE_URL}/auth/biometric/login`, {
                    email,
                    challengeId: newChallengeData.challengeId,
                    signature,
                });
                console.log('Respuesta del backend:', response.data);
                const { access_token, user } = response.data;
                if (!user || !access_token) {
                    throw new Error('Datos de usuario o token no recibidos');
                }

                // Actualizar AuthContext con los datos del login biométrico
                await login(email, undefined, { access_token, user });

                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: translate('successRegister.title'),
                    text2: translate('successRegister.successMessage'),
                    visibilityTime: 3000,
                    autoHide: true,
                    topOffset: 30,
                    text1Style: { color: colors.black },
                    text2Style: { color: colors.black },
                });
                onClose();
            } else {
                console.log('Autenticación biométrica fallida', { error: error || 'No se proporcionó firma' });
                if (error && (
                    error.includes('No installed provider supports this key') ||
                    error.includes('Error generating signature') ||
                    error.includes('key: (null)')
                )) {
                    console.log('No hay clave biométrica, forzando registro');
                    setNeedsRegistration(true);
                } else {
                    throw new Error(error || 'Fallo en autenticación biométrica');
                }
            }
        } catch (error: any) {
            console.log('Error en autenticación biométrica:', {
                message: error.response?.data?.message || error.message,
                timestamp: new Date().toISOString(),
            });
            if (error.response?.data?.message === 'Challenge inválido o ya usado') {
                console.log('Challenge inválido detectado, intentando con nuevo challenge...');
                setChallengeData(null); // Limpiar challenge actual
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: translate('errorRegister.title'),
                    text2: 'Por favor, intenta de nuevo',
                    visibilityTime: 3000,
                    autoHide: true,
                    topOffset: 30,
                    text1Style: { color: colors.black },
                    text2Style: { color: colors.black },
                });
            } else {
                Toast.show({
                    type: 'error',
                    position: 'top',
                    text1: translate('errorRegister.title'),
                    text2: error.response?.data?.message || translate('errorRegister.subTitle'),
                    visibilityTime: 3000,
                    autoHide: true,
                    topOffset: 30,
                    text1Style: { color: colors.black },
                    text2Style: { color: colors.black },
                });
            }
        } finally {
            setIsLoading(false);
        }
    };

    console.log('Renderizando BiometricModal - biometricsAvailable:', biometricsAvailable, 'isVisible:', isVisible, 'needsRegistration:', needsRegistration);

    if (!biometricsAvailable || !isVisible) {
        console.log('No renderizando modal debido a: biometricsAvailable=', biometricsAvailable, 'isVisible=', isVisible);
        return null;
    }

    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            swipeDirection="down"
            onSwipeComplete={onClose}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            style={styles.modal}
            backdropOpacity={0.3}>
            <Animated.View
                style={[
                    styles.modalContent,
                    {
                        transform: [
                            {
                                translateY: slideAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [300, 0],
                                }),
                            },
                        ],
                    },
                ]}>
                <Text style={styles.modalTitle}>
                    {needsRegistration
                        ? translate('RegisterBiometrics')
                        : translate(biometryType === 'FaceID' ? 'LoginWithFaceID' : 'LoginWithFingerprint')}
                </Text>
                <TouchableOpacity
                    style={[styles.biometricButton, isLoading && styles.biometricButtonDisabled]}
                    onPress={needsRegistration ? handleRegisterBiometric : handleBiometricLogin}
                    disabled={isLoading || (!needsRegistration && !challengeData)}
                    activeOpacity={0.7}>
                    <SvgWrapper
                        size={80}
                        color={isLoading ? colors.gray[400] : colors.primary[400]}>
                        <FingerPrinter />
                    </SvgWrapper>
                </TouchableOpacity>
                <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>{translate('Cancel')}</Text>
                </TouchableOpacity>
            </Animated.View>
        </Modal>
    );
};

export default BiometricModal;