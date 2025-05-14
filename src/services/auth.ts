import axios from "axios";
import { RegisterFormData, LoginFormData } from "../types/auth";
import api from "./api";
import { jwtDecode } from 'jwt-decode';

class AuthServices {
    async registerUser(userData: RegisterFormData) {
        try {
            const response = await api.post(
                '/users/register',
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

    async loginUser(loginData: LoginFormData) {
        try {
            const response = await api.post('/auth/login', loginData);
            const decodedToken = jwtDecode(response.data.access_token);

            console.log("Descodificando token user: ", decodedToken)

            return {
                access_token: response.data.access_token,
                user: {
                    email: decodedToken.email,
                    id: decodedToken.sub,
                    role: decodedToken.role
                }
            };
        } catch (error) {
            if (error.response) {
                throw new Error(
                    error.response.data?.message ||
                    error.response.data?.error ||
                    'Credenciales inválidas'
                );
            }
            throw new Error('Error de conexión al iniciar sesión');
        }
    }
}

export default AuthServices