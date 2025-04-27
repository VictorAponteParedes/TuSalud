import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../theme/colors";
import { translate } from "../../lang";
import Routes from "../../navigation/routes";


interface CustomHeaderProps {
    title?: string;
    titleBack?: string;
    onBackPress?: () => void;
}

const CustomHeader = (props: CustomHeaderProps) => {
    const { title, titleBack, onBackPress } = props;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backButton}>{titleBack}</Text>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default CustomHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: colors.primary
    },
    title: {
        fontSize: 20,
        color: colors.white,
    },
    backButton: {
        fontSize: 16,
        color: colors.white,
    },

});