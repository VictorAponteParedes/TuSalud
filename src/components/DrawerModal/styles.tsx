import { Dimensions, StyleSheet } from "react-native";
import colors from "../../theme/colors";


const styles = StyleSheet.create({
    modal: {
        margin: 0,
        justifyContent: 'flex-start',
    },
    container: {
        width: Dimensions.get('window').width * 0.8,
        height: '100%',
        backgroundColor: 'white',
    },
    header: {
        height: 60,
        backgroundColor: colors.primary[400],
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    closeButton: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    content: {
        flex: 1,
        padding: 15,
    },
});

export default styles;