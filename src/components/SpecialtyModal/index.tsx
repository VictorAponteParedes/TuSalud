import React from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { Close } from '../../helpers';
import SvgWrapper from '../SvgWrapper';
import colors from '../../theme/colors';
import { SpecialtiesType } from '../../types/specialties';
import styles from './styles';

interface SpecialtyModalProps {
    visible: boolean;
    specialties: SpecialtiesType[];
    onClose: () => void;
    onSelect: (id: string) => void;
}

const SpecialtyModal: React.FC<SpecialtyModalProps> = ({
    visible,
    specialties,
    onClose,
    onSelect,
}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Selecciona una especialidad</Text>
                        <TouchableOpacity
                            style={styles.modalCloseButton}
                            onPress={onClose}
                        >
                            <SvgWrapper color={colors.white} size={24}>
                                <Close />
                            </SvgWrapper>
                        </TouchableOpacity>
                    </View>

                    <FlatList
                        data={specialties}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.modalItem}
                                onPress={() => onSelect(item.id)}
                            >
                                <Text style={styles.modalItemText}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </View>
        </Modal>
    );
};



export default SpecialtyModal;