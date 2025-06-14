import { StyleSheet } from "react-native";
import colors from "../../theme/colors";
import { fontsOpenSans } from "../../types/fonts";
import sizeText from "../../theme/size";

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
        fontSize: sizeText.title.subtitle,
        fontFamily: fontsOpenSans.regular,
        color: colors.primary[400],
    },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalContainer: {
        backgroundColor: colors.white,
        width: "90%",
        maxHeight: "70%",
        borderRadius: 15,
        padding: 20,
    },

    modalTitle: {
        fontSize: 18,
        fontFamily: fontsOpenSans.regular,
        color: colors.gray[800],
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 10,

    },

    modalItem: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderColor: colors.gray[200],
    },

    modalItemText: {
        fontSize: 16,
        color: colors.primary[500],
    },

    modalCloseButton: {
        backgroundColor: colors.primary[400],
        borderRadius: 10,
        alignItems: "center",
    },

    modalCloseButtonText: {
        color: colors.white,
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
    imageRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    doctorImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: colors.primary[400],
    },
    doctorInfo: {
        flex: 1,
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
        borderWidth: 1.5,
        borderColor: colors.green[400],
    },

    scheduleItemBox: {
        borderWidth: 1,
        borderColor: colors.green[400],
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        backgroundColor: colors.green[50],
    },

    selectedScheduleItem: {
        backgroundColor: colors.green[200],
        borderColor: colors.green[400],
    },

    createAppointmentButton: {
        backgroundColor: colors.primary[400],
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
        marginVertical: 20,
    },

    createAppointmentText: {
        color: colors.white,
        fontFamily: fontsOpenSans.regular,
        fontSize: 16,
    },
    emptyDoctorsContainer: {
        marginTop: 20,
        padding: 16,
        backgroundColor: "#fff8f8",
        borderRadius: 10,
        borderColor: "#f44336",
        borderWidth: 1,
    },

    emptyDoctorsText: {
        textAlign: "center",
        color: "#f44336",
        fontWeight: "600",
    },



});

export default styles;
