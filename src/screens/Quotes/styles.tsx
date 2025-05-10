import { Dimensions, StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { fontsOpenSans } from "../../types/fonts";
import sizeText from "../../theme/size";



const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.white,
        flex: 1,
    },
    label: {
        fontSize: sizeText.title.text,
        fontFamily: fontsOpenSans.regular,
        marginBottom: 10,
        color: colors.black,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 8,
        justifyContent: "center",
    },
    inputText: {
        fontSize: sizeText.title.text,
        fontFamily: fontsOpenSans.regular,
        color: colors.grayDark,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
        maxHeight: "80%",
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: sizeText.title.subtitle,
        fontFamily: fontsOpenSans.regular,
        color: colors.black,
    },
    closeText: {
        fontSize: sizeText.title.text,
        fontFamily: fontsOpenSans.regular,
        color: colors.primary[300],
    },
    modalItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    icon: {
        width: 40,
        height: 40,
        borderRadius: 6,
        marginRight: 15,
        backgroundColor: "#ddd",
    },
    itemText: {
        fontSize: sizeText.title.text,
        fontFamily: fontsOpenSans.regular,
        color: colors.primary[600],
    },
    listContainer: {
        paddingBottom: 60,
    },

});
export default styles