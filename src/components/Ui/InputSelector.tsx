// components/InputSelector.js
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import colors from "../../theme/colors";
import { fontsOpenSans } from "../../types/fonts";

const InputSelector = ({ items, onSelect, selectedItem }) => {
    return (
        <View style={styles.container}>
            {items.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={[
                        styles.itemContainer,
                        selectedItem?.id === item.id && styles.selectedItem
                    ]}
                    onPress={() => onSelect(item)}
                >
                    <View style={styles.iconContainer}>
                        {item.icon && (
                            <item.icon width={24} height={24} fill={colors.primary} />
                        )}
                    </View>
                    <Text style={styles.itemText}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 10,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.grayLight,
    },
    selectedItem: {
        backgroundColor: colors.primary[300],
    },
    iconContainer: {
        marginRight: 15,
        width: 30,
        alignItems: 'center',
    },
    itemText: {
        flex: 1,
        color: colors.black,
        fontSize: 16,
        fontFamily: fontsOpenSans.regular,
    },
});

export default InputSelector;