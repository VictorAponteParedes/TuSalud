import { StyleSheet } from 'react-native';
import colors from '../../../theme/colors';

export default StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        padding: 16,
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    historyTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.gray[900],
        marginBottom: 6,
    },
    historyDescription: {
        fontSize: 14,
        color: colors.gray[700],
        marginBottom: 4,
    },
    historyDate: {
        fontSize: 12,
        color: colors.gray[500],
    },
});
