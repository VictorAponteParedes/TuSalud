import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        padding: 16,
        marginBottom: 12,
        borderRadius: 10,
        shadowColor: colors.gray[800],
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: colors.gray[200],
    },
    selectedCard: {
        borderWidth: 2,
        borderColor: colors.primary[400],
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: colors.primary[400],
        backgroundColor: colors.gray[100],
    },
    infoContainer: {
        flex: 1,
        gap: 6,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.gray[800],
    },
    description: {
        fontSize: 14,
        color: colors.gray[600],
        lineHeight: 20,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    rating: {
        fontSize: 14,
        fontWeight: '600',
        color: colors.yellow[600],
    },
    reviews: {
        fontSize: 12,
        color: colors.gray[500],
    },
    status: {
        fontSize: 14,
        fontStyle: 'italic',
        color: colors.gray[700],
    },
    schedulesContainer: {
        marginTop: 12,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: colors.gray[200],
        gap: 8,
    },
    schedulesTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.primary[400],
    },
    scheduleItem: {
        backgroundColor: colors.primary[50],
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.primary[100],
    },
    selectedSchedule: {
        backgroundColor: colors.primary[100],
        borderColor: colors.primary[400],
    },
    scheduleText: {
        fontSize: 14,
        color: colors.gray[700],
    },
});
export default styles