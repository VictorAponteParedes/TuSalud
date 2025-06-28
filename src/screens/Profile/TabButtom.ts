import { InfoPatientCardEnum } from "../../enum/infoPatientCardEnum";
import { translate } from "../../lang";

export const tabs = [
    {
        key: InfoPatientCardEnum.PERSONAL,
        label: 'Personal',
    },
    {
        key: InfoPatientCardEnum.APPOINTMENTS,
        label: translate('Appointment.title'),
    },
    {
        key: InfoPatientCardEnum.HISTORY,
        label: translate('Historial.title'),
    },
    {
        key: InfoPatientCardEnum.DOCUMENTS,
        label: translate('Documents.title'),
    },
];
