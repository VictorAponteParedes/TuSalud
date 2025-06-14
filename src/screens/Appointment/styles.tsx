import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f9fafa", // fondo claro y limpio
    },

    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
        color: "#333",
    },

    specialtyButton: {
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 10,
        backgroundColor: "#e0f2f1", // verde suave
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#b2dfdb",
    },

    specialtyButtonText: {
        fontSize: 16,
        color: "#00796b", // tono verde fuerte
        textAlign: "center",
    },

    doctorsContainer: {
        marginTop: 24,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#ccc",
    },

    doctorCard: {
        backgroundColor: "#fff",
        padding: 16,
        marginBottom: 12,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2, // Android shadow
        borderWidth: 1,
        borderColor: "#e0e0e0",
    },

    doctorName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#37474f",
        marginBottom: 4,
    },
    scheduleContainer: {
        marginTop: 12,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },

    scheduleTitle: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 6,
        color: "#00796b",
    },

    scheduleItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 4,
    },

    scheduleDay: {
        fontSize: 14,
        color: "#555",
    },

    scheduleTime: {
        fontSize: 14,
        color: "#444",
    },

});

export default styles;
