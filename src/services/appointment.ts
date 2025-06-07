import axios from "axios";
import { API_BASE_URL } from "../constants";
import type { AppointmentFormData } from "../types/appointment";

export class AppointmentService {

    async createAppointment(appointmentData: AppointmentFormData) {
        try {
            const response = await axios.post(`${API_BASE_URL}/appointments`, appointmentData);
            return response.data;
        } catch (error) {
            console.error("Error creating appointment:", error);
            throw error;
        }
    }

    async getAll(): Promise<AppointmentFormData[]> {
        try {
            const response = await axios.get(`${API_BASE_URL}/appointments`);
            return response.data;
        } catch (error) {
            console.error("Error fetching appointments:", error);
            throw error;
        }
    }

    async getById(userId: string) {
        try {
            const response = await axios.get(`${API_BASE_URL}/appointments/patient/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error al obtener citas del usuario:', error);
            throw error;
        }
    }

}
