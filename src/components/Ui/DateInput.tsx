import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Alert } from 'react-native';
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
    const [internalDate, setInternalDate] = useState<Date | null>(null);

    const handleDateChange = (selectedDate: Date | undefined, onChange: (value: string) => void) => {
        if (!selectedDate) return;

        if (isDateAllowed && !isDateAllowed(selectedDate)) {
            Alert.alert(
                "Día no disponible",
                "El doctor no atiende este día. Por favor selecciona otro día.",
                [{ text: "OK" }]
            );
            return;
        }

        setInternalDate(selectedDate);
        onChange(formatForDatabase(selectedDate));
        setShowPicker(Platform.OS === 'ios');
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
                                    }}
                                    onCancel={() => setShowPicker(false)}
                                    locale="es_ES"
                                    validRange={{
                                        startDate: minimumDate,
                                        endDate: maximumDate,
                                        disabledDates: (date) => isDateAllowed ? !isDateAllowed(date) : false
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
});

export default DateInput;