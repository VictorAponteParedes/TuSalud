import { API_BASE_URL } from "../constants";
import axios from "axios";




export class SpecialtyService {
    async getSpecialty() {
        try {
            const response = await axios.get(`${API_BASE_URL}/specialties`);
            return response.data.data;
        } catch (error) {
            console.error("Error fetching doctors:", error);
            throw error;
        }
    }
}