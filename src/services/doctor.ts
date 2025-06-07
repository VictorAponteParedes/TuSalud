import { API_BASE_URL } from "../constants";
import axios from "axios";




export class DoctorService {
    async getDoctors() {
        try {
            const response = await axios.get(`${API_BASE_URL}/doctors`);
            return response.data.data;
        } catch (error) {
            console.error("Error fetching doctors:", error);
            throw error;
        }
    }

    async getDoctorById(doctorId: string) {
        try {
            const response = await axios.get(`${API_BASE_URL}/doctors/${doctorId}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching doctor with ID ${doctorId}:`, error);
            throw error;
        }
    }
    async createDoctor(doctorData: any) {
        try {
            const response = await axios.post(`${API_BASE_URL}/doctors`, doctorData);
            return response.data;
        } catch (error) {
            console.error("Error creating doctor:", error);
            throw error;
        }
    }


}