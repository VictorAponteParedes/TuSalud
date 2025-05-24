import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native';
import { launchCamera, launchImageLibrary, Asset } from 'react-native-image-picker';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import colors from '../../theme/colors';
import { fontsOpenSans } from '../../types/fonts';

interface InputImageProps {
    label: string;
    onImageSelected: (image: Asset) => void;
    imageUri?: string;
}

const InputImage: React.FC<InputImageProps> = ({ label, onImageSelected, imageUri }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const scale = useSharedValue(0); // Valor animado para la escala del modal

    // Animación de entrada/salida del modal
    const animatedModalStyle = useAnimatedStyle(() => ({
        transform: [{ scale: withSpring(modalVisible ? 1 : 0, { damping: 20, stiffness: 300 }) }],
        opacity: withSpring(modalVisible ? 1 : 0, { damping: 20, stiffness: 300 }),
    }));

    const openCamera = () => {
        launchCamera(
            { mediaType: 'photo', saveToPhotos: true },
            (response) => {
                if (response.assets && response.assets.length > 0) {
                    onImageSelected(response.assets[0]);
                    setModalVisible(false);
                }
            }
        );
    };

    const openGallery = () => {
        launchImageLibrary(
            { mediaType: 'photo' },
            (response) => {
                if (response.assets && response.assets.length > 0) {
                    onImageSelected(response.assets[0]);
                    setModalVisible(false);
                }
            }
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.imagePlaceholder}
            >
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.imagePreview} />
                ) : (
                    <Text style={styles.placeholderText}>Seleccionar imagen</Text>
                )}
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                transparent
                animationType="none" // Usamos reanimated para la animación
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalBackground}
                    onPress={() => setModalVisible(false)}
                    activeOpacity={1}
                >
                    <Animated.View style={[styles.modalContent, animatedModalStyle]}>
                        <Text style={styles.modalTitle}>Elige una opción</Text>
                        <TouchableOpacity onPress={openCamera} style={[styles.modalButton, styles.cameraButton]}>
                            <Text style={styles.buttonText}>Abrir cámara</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openGallery} style={[styles.modalButton, styles.galleryButton]}>
                            <Text style={styles.buttonText}>Abrir galería</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={[styles.modalButton, styles.cancelButton]}
                        >
                            <Text style={[styles.buttonText, { color: colors.primary[400] }]}>Cancelar</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        fontFamily: fontsOpenSans.regular,
        color: '#333',
    },
    imagePlaceholder: {
        height: 150,
        borderWidth: 2,
        borderColor: colors.primary[400],
        borderStyle: 'dashed',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
            },
            android: {
                elevation: 3,
            },
        }),
    },
    imagePreview: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
    placeholderText: {
        color: colors.primary[400],
        fontSize: 16,
        fontFamily: fontsOpenSans.regular,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        width: '80%',
        maxWidth: 300,
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 8,
            },
            android: {
                elevation: 8,
            },
        }),
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: fontsOpenSans.regular,
        color: '#333',
        marginBottom: 20,
    },
    modalButton: {
        width: '100%',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 8,
    },
    cameraButton: {
        backgroundColor: colors.primary[400],
    },
    galleryButton: {
        backgroundColor: colors.primary[400],
        opacity: 0.85,
    },
    cancelButton: {
        backgroundColor: '#f1f3f5',
    },
    buttonText: {
        fontSize: 16,
        fontFamily: fontsOpenSans.regular,
        color: '#fff',
    },
});

export default InputImage;