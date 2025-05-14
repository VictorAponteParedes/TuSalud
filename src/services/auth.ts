import axios from "axios";
import { RegisterFormData } from "../types/auth";

const API_BASE_URL = "http://192.168.0.101:3000";

class AuthServices {
    async registerUser(userData: RegisterFormData) {
        try {
            const response = await axios.post(
                `${API_BASE_URL}/users/register`,
                userData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {

                throw new Error(
                    error.response?.data?.message ||
                    "Error al registrar el usuario"
                );
            }
            throw new Error("Error desconocido al registrar el usuario");
        }
    }
}

export default AuthServices