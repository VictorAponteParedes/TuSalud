import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import { fontsOpenSans } from "../../../types/fonts";

const styles = StyleSheet.create({
    card: {
        width: '98%',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#fff',
        overflow: 'hidden',
        elevation: 3,
        shadowColor: colors.grayDark,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        marginBottom: 16,
        borderWidth: 0.5,
        borderColor: colors.grayLight,
    },
    image: {
        width: '100%',
        height: '50%',
    },
    content: {
        padding: 16,
        justifyContent: 'center',
        height: '50%',
    },
    title: {
        fontSize: 16,
        fontFamily: fontsOpenSans.regular,
        marginBottom: 6,
        color: colors.black,
    },
    description: {
        fontSize: 14,
        color: colors.grayDark,
        fontFamily: fontsOpenSans.regular,
        lineHeight: 20,
    },
});

export default styles;