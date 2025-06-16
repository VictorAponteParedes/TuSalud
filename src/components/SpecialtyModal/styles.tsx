import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: colors.white,
        width: '90%',
        maxHeight: '70%',
        borderRadius: 15,
        padding: 20,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'OpenSans-Regular',
        color: colors.gray[800],
    },
    modalCloseButton: {
        backgroundColor: colors.primary[400],
        borderRadius: 10,
        padding: 8,
    },
    modalItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: colors.gray[200],
    },
    modalItemText: {
        fontSize: 16,
        color: colors.primary[500],
        fontFamily: 'OpenSans-Regular',
    },
});

export default styles