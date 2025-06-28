import axios from "axios";
import { PatientType } from "../types/patient";
import { API_BASE_URL } from "../constants";


export const uploadApi = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

class PatientServices {

    async uploadImage(formDataUser: FormData) {
        console.log('Datos imagen services: ', formDataUser)
        try {
            const response = await uploadApi.post('/upload', formDataUser, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (e: any) {
            console.log('Error detallado:', e.response?.data || e.message);
            throw e;
        }
    }

    async getPatientById(patientId: string): Promise<PatientType | null> {
        try {
            const response = await axios.get(`${API_BASE_URL}/users/${patientId}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener paciente:', error);
            throw error;
        }
    }

    returnUrlImage(patient: any): string {
        return patient?.profileImage?.path
            ? patient.profileImage.path.startsWith("http")
                ? patient.profileImage.path
                : `${API_BASE_URL}/${patient.profileImage.path}`
            : "/default-avatar.png";
    }

}

export default PatientServices