import { Dimensions, StyleSheet } from "react-native";
import colors from "../../theme/colors";


const styles = StyleSheet.create({
    modal: {
        margin: 0,
        justifyContent: 'flex-start',
    },
    container: {
        width: Dimensions.get('window').width * 0.85,
        height: '100%',
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: { width: 2, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5,
    },
    header: {
        height: 60,
        width: '100%',
        backgroundColor: colors.primary[400],
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
    },
    closeButton: {
        padding: 5,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
});

export default styles;