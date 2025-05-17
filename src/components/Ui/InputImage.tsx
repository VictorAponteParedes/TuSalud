import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchCamera, launchImageLibrary, Asset } from 'react-native-image-picker';

interface InputImageProps {
    label: string;
    onImageSelected: (image: Asset) => void; // callback con la imagen seleccionada
    imageUri?: string; // url local para mostrar preview
}

const InputImage: React.FC<InputImageProps> = ({ label, onImageSelected, imageUri }) => {
    const [modalVisible, setModalVisible] = useState(false);

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
        <View style={{ marginVertical: 10 }}>
            <Text style={{ marginBottom: 5 }}>{label}</Text>
            <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.imagePlaceholder}
            >
                {imageUri ? (
                    <Image source={{ uri: imageUri }} style={styles.imagePreview} />
                ) : (
                    <Text style={{ color: '#aaa' }}>Seleccionar imagen</Text>
                )}
            </TouchableOpacity>

            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity
                    style={styles.modalBackground}
                    onPress={() => setModalVisible(false)}
                    activeOpacity={1}
                >
                    <View style={styles.modalContent}>
                        <TouchableOpacity onPress={openCamera} style={styles.modalButton}>
                            <Text>Abrir cámara</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openGallery} style={styles.modalButton}>
                            <Text>Abrir galería</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={[styles.modalButton, { backgroundColor: '#ddd' }]}>
                            <Text>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    imagePlaceholder: {
        height: 150,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    imagePreview: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: '#00000055',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        width: 250,
        borderRadius: 8,
        padding: 20,
        alignItems: 'center',
    },
    modalButton: {
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
});

export default InputImage;
