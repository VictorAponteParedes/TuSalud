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

    selectButton: {
        backgroundColor: "#e6e6e6",
        padding: 12,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: "center",
    },
    selectButtonText: {
        fontSize: 16,
        color: "#333",
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalContainer: {
        backgroundColor: "#fff",
        width: "80%",
        maxHeight: "70%",
        borderRadius: 15,
        padding: 20,
    },

    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },

    modalItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: "#ccc",
    },

    modalItemText: {
        fontSize: 16,
    },

    modalCloseButton: {
        marginTop: 20,
        backgroundColor: "#e53935",
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
    },

    modalCloseButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    scheduleContainer: {
        marginTop: 12,
        paddingTop: 8,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
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

    specialtyButton: {
        backgroundColor: "#f2f2f2",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
        marginVertical: 10,
    },
    specialtyButtonSelected: {
        backgroundColor: "#007bff",
    },
    specialtyButtonText: {
        color: "#333",
    },
    selectedDoctorCard: {
        borderWidth: 2,
        borderColor: "#4caf50",
    },

    scheduleItemBox: {
        borderWidth: 1,
        borderColor: "#4caf50",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        backgroundColor: "#f9f9f9",
    },

    selectedScheduleItem: {
        backgroundColor: "#d0f0d0",
        borderColor: "#2e7d32",
    },

    createAppointmentButton: {
        backgroundColor: "#007bff",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 20,
    },

    createAppointmentText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },



});

export default styles;
