// styles.ts
import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

export default StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        padding: 16,
        borderRadius: 5,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4,
    },
    documentName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.gray[900],
        marginBottom: 4,
    },
    date: {
        fontSize: 13,
        color: colors.gray[600],
    },
});
