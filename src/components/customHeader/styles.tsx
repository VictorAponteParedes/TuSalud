import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: colors.primary[50],
        paddingVertical: 30,
        borderStartEndRadius: 20,
        borderBottomEndRadius: 20,
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

export default styles;