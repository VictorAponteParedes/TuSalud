// helpers/status.ts
import colors from "../theme/colors";
import { StatusAppointment } from "../enum/statusAppointment";

export const getStatusStyle = (status: string) => {
    switch (status) {
        case StatusAppointment.PENDING:
            return {
                backgroundColor: colors.yellow[100],
                borderColor: colors.yellow[300],
                text: 'Pendiente'
            };
        case StatusAppointment.APPROVED:
            return {
                backgroundColor: colors.green[100],
                borderColor: colors.green[500],
                text: 'Aprobado'
            };
        case StatusAppointment.REJECTED:
            return {
                backgroundColor: colors.red[100],
                borderColor: colors.red[500],
                text: 'Rechazado'
            };
        default:
            return {
                backgroundColor: colors.gray[100],
                borderColor: colors.gray[400],
                text: 'Desconocido'
            };
    }
};