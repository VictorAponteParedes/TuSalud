import { RegisterFormData } from "./auth";
import { DoctorFormData } from "./doctors";

export interface AppointmentFormData {
    id: string;
    appointmentDate: string;
    reason: string;
    notes?: string;
    patientId: string;
    doctorId: string;
    patient: RegisterFormData;
    doctor: DoctorFormData;
    status: string;
    appointmentTime: string;
}