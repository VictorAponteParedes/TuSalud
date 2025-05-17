import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginVertical: 8,
        width: '100%',
    },
    iconContainer: {
        marginRight: 16,
    },
    infoContainer: {
        flex: 1,
    },
    dateText: {
        fontSize: 14,
        color: '#636e72',
        marginBottom: 8,
        fontWeight: '500',
    },
    doctorInfo: {
        marginBottom: 4,
    },
    doctorName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#2d3436',
        marginBottom: 4,
    },
    specialtyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    specialtyText: {
        fontSize: 14,
        color: '#636e72',
        marginLeft: 6,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeText: {
        fontSize: 14,
        color: '#00b894',
        marginLeft: 6,
        fontWeight: '500',
    },
    rightIconContainer: {
        marginLeft: 8,
    },
    doctorImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 16,
    },
});

export default styles;