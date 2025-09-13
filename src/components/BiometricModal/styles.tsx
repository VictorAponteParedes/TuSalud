import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { fontsOpenSans } from '../../types/fonts';

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 24,
        alignItems: 'center',
        height: '50%',
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: fontsOpenSans.regular,
        color: colors.black,
        marginBottom: 24,
        textAlign: 'center',
    },
    biometricButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    biometricButtonDisabled: {
        backgroundColor: colors.gray[200],
        opacity: 0.6,
    },
    cancelButton: {
        marginTop: 24,
        paddingVertical: 8,
    },
    cancelButtonText: {
        fontSize: 16,
        fontFamily: fontsOpenSans.regular,
        color: colors.red[300],
        textDecorationLine: 'underline',
    },
});

export default styles;