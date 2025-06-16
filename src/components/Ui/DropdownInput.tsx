// components/DropdownInput.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import colors from '../../theme/colors';
import { translate } from '../../lang';

interface DropdownInputProps {
    value: string | null;
    data: Array<{ label: string; value: string }>;
    placeholder?: string;
    onChange: (value: string) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({
    value,
    data,
    placeholder = translate("input.placeholder"),
    onChange
}) => {
    return (
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={data}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={placeholder}
            searchPlaceholder="Buscar..."
            value={value}
            onChange={item => onChange(item.value)}
            renderLeftIcon={() => (
                <View style={styles.icon}>
                    {/* Aquí puedes poner un ícono SVG */}
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor: colors.primary[400],
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 12,
        backgroundColor: colors.white,
    },
    placeholderStyle: {
        fontSize: 16,
        color: colors.gray[400],
    },
    selectedTextStyle: {
        fontSize: 16,
        color: colors.gray[800],
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        borderRadius: 8,
    },
    icon: {
        marginRight: 10,
    },
});

export default DropdownInput;