import React, { useState, useEffect } from 'react';
import { Animated, TouchableOpacity, Text } from 'react-native';
import Modal from 'react-native-modal';
import ReactNativeBiometrics from 'react-native-biometrics';
import Toast from 'react-native-toast-message';
import { translate } from '../../lang';
import colors from '../../theme/colors';
import { FingerPrinter } from '../../helpers';
import SvgWrapper from '../SvgWrapper';
import styles from './styles';

interface BiometricModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const BiometricModal: React.FC<BiometricModalProps> = ({ isVisible, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [biometricsAvailable, setBiometricsAvailable] = useState(false);
    const [biometryType, setBiometryType] = useState<string | null>(null);
    const slideAnim = useState(new Animated.Value(0))[0];

    // Verificar disponibilidad de biometría
    useEffect(() => {
        console.log('Verificando disponibilidad de biometría en BiometricModal...');
        const rnBiometrics = new ReactNativeBiometrics();
        rnBiometrics.isSensorAvailable()
            .then(({ available, biometryType, error }) => {
                console.log('Resultado de isSensorAvailable:', { available, biometryType, error });
                if (available && biometryType) {
                    setBiometricsAvailable(true);
                    setBiometryType(biometryType);
                    console.log(`Biometría disponible: ${biometryType}`);
                    Animated.timing(slideAnim, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                    }).start();
                } else {
                    console.log('Biometría no disponible', { error: error || 'No se detectó hardware biométrico' });
                    setBiometricsAvailable(false);
                    onClose(); // Cierra el modal si no hay biometría
                }
            })
            .catch(err => {
                console.log('Error al verificar biometría:', err.message);
                setBiometricsAvailable(false);
                onClose();
            });
    }, [slideAnim, onClose]);

    // Autenticación biométrica
    const handleBiometricLogin = async () => {
        try {
            setIsLoading(true);
            const rnBiometrics = new ReactNativeBiometrics();
            const { success, signature, error } = await rnBiometrics.createSignature({
                promptMessage: translate('AuthenticateWithBiometrics'),
                payload: 'TEST_CHALLENGE',
            });

            if (success && signature) {
                console.log('Autenticación biométrica exitosa', {
                    biometryType,
                    signature,
                    timestamp: new Date().toISOString(),
                });
                Toast.show({
                    type: 'success',
                    position: 'top',
                    text1: translate('successBiometric.title'),
                    text2: translate('successBiometric.message'),
                    visibilityTime: 3000,
                    autoHide: true,
                    topOffset: 30,
                    text1Style: { color: colors.black },
                    text2Style: { color: colors.black },
                });
                onClose(); // Cierra el modal tras éxito
            } else {
                console.log('Autenticación biométrica fallida', { error: error || 'No se proporcionó firma' });
                throw new Error(error || 'Fallo en autenticación biométrica');
            }
        } catch (error: any) {
            console.log('Error en autenticación biométrica:', {
                message: error.message,
                timestamp: new Date().toISOString(),
            });
            Toast.show({
                type: 'error',
                position: 'top',
                text1: translate('errorBiometric.title'),
                text2: error.message || translate('errorBiometric.message'),
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 30,
                text1Style: { color: colors.black },
                text2Style: { color: colors.black },
            });
        } finally {
            setIsLoading(false);
        }
    };

    if (!biometricsAvailable) return null;

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
                    {translate(biometryType === 'FaceID' ? 'LoginWithFaceID' : 'LoginWithFingerprint')}
                </Text>
                <TouchableOpacity
                    style={[styles.biometricButton, isLoading && styles.biometricButtonDisabled]}
                    onPress={handleBiometricLogin}
                    disabled={isLoading}
                    activeOpacity={0.7}>
                    <SvgWrapper
                        size={80}
                        color={isLoading ? colors.gray[400] : colors.black}>
                        <FingerPrinter />
                    </SvgWrapper>
                </TouchableOpacity>
                <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
                    <Text style={styles.cancelButtonText}>{translate('Cancel')}</Text>
                </TouchableOpacity>
            </Animated.View>
        </Modal >
    );
};

export default BiometricModal;