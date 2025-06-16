import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Modal } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Controller } from 'react-hook-form';
import SvgWrapper from '../SvgWrapper';
import colors from '../../theme/colors';
import { formatDate, formatForDatabase } from '../../helpers/time';

interface DateInputProps {
    label: string;
    placeholder?: string;
    control: any;
    name: string;
    iconName?: React.ReactNode;
    minimumDate?: Date;
    maximumDate?: Date;
    isDateAllowed?: (date: Date) => boolean;
}

const DateInput: React.FC<DateInputProps> = ({
    label,
    placeholder,
    control,
    name,
    iconName,
    minimumDate,
    maximumDate,
    isDateAllowed
}) => {
    const [showPicker, setShowPicker] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [internalDate, setInternalDate] = useState<Date | null>(null);

    const handleDateChange = (selectedDate: Date | undefined, onChange: (value: string) => void) => {
        if (!selectedDate) return;

        const normalizedDate = new Date(selectedDate);
        normalizedDate.setHours(12, 0, 0, 0);

        if (isDateAllowed && !isDateAllowed(normalizedDate)) {
            setShowErrorModal(true);
            return;
        }

        setInternalDate(normalizedDate);
        onChange(formatForDatabase(normalizedDate));
        setShowPicker(Platform.OS === 'ios');
    };

    const getDisabledDates = (date: Date) => {
        if (!isDateAllowed) return false;
        return !isDateAllowed(date);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => (
                    <>
                        <TouchableOpacity
                            style={styles.inputContainer}
                            onPress={() => setShowPicker(true)}
                        >
                            {iconName && (
                                <View style={styles.icon}>
                                    <SvgWrapper color={colors.primary[400]} size={24}>
                                        {iconName}
                                    </SvgWrapper>
                                </View>
                            )}
                            <Text style={[
                                styles.inputText,
                                !value && styles.placeholderText
                            ]}>
                                {formatDate(value || internalDate, placeholder)}
                            </Text>
                        </TouchableOpacity>

                        {showPicker && (
                            Platform.OS === 'ios' ? (
                                <DateTimePickerModal
                                    isVisible={showPicker}
                                    mode="date"
                                    date={value ? new Date(value) : internalDate || new Date()}
                                    minimumDate={minimumDate}
                                    maximumDate={maximumDate}
                                    onConfirm={(selectedDate) => {
                                        handleDateChange(selectedDate, onChange);
                                        setShowPicker(false);
                                    }}
                                    onCancel={() => setShowPicker(false)}
                                    locale="es_ES"
                                    validRange={{
                                        startDate: minimumDate,
                                        endDate: maximumDate,
                                        disabledDates: getDisabledDates
                                    }}
                                />
                            ) : (
                                <DateTimePicker
                                    value={value ? new Date(value) : internalDate || new Date()}
                                    mode="date"
                                    display="calendar"
                                    minimumDate={minimumDate}
                                    maximumDate={maximumDate}
                                    onChange={(event, selectedDate) => {
                                        handleDateChange(selectedDate, onChange);
                                        setShowPicker(false);
                                    }}
                                    locale="es-ES"
                                />
                            )
                        )}

                        {/* Modal personalizado para errores */}
                        <Modal
                            animationType="fade"
                            transparent={true}
                            visible={showErrorModal}
                            onRequestClose={() => setShowErrorModal(false)}
                        >
                            <View style={styles.modalOverlay}>
                                <View style={styles.modalContainer}>
                                    <View style={styles.modalHeader}>
                                        <Text style={styles.modalTitle}>Día no disponible</Text>
                                    </View>
                                    <Text style={styles.modalText}>
                                        El doctor no atiende este día. Por favor selecciona otro día.
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.modalButton}
                                        onPress={() => setShowErrorModal(false)}
                                    >
                                        <Text style={styles.modalButtonText}>Entendido</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontFamily: 'OpenSans-SemiBold',
        color: colors.gray[800],
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.gray[300],
        borderRadius: 8,
        padding: 12,
        backgroundColor: colors.white,
    },
    icon: {
        marginRight: 10,
    },
    inputText: {
        fontSize: 16,
        color: colors.gray[800],
        fontFamily: 'OpenSans-Regular',
        flex: 1,
    },
    placeholderText: {
        color: colors.gray[400],
    },
    // Estilos para el modal personalizado
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: colors.white,
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
    },
    modalHeader: {
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 20,
        fontFamily: 'OpenSans-Bold',
        color: colors.error[500],
    },
    modalText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: colors.gray[700],
        fontFamily: 'OpenSans-Regular',
    },
    modalButton: {
        backgroundColor: colors.primary[500],
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    modalButtonText: {
        color: colors.white,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 16,
    },
});

export default DateInput;