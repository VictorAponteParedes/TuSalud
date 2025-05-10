import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    doctorImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    doctorName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    speciality: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6,
    },
    ratingText: {
        fontSize: 12,
        color: '#888',
        marginLeft: 6,
    },
    rating: {
        alignSelf: 'flex-start',
        marginRight: 5,
        paddingVertical: 0,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
    },
    available: {
        backgroundColor: '#E8F5E9',
    },
    unavailable: {
        backgroundColor: '#FFEBEE',
    },
    statusText: {
        fontSize: 12,
        fontWeight: '500',
    }
});
export default styles