import axios from "axios";
import { RegisterFormData, LoginFormData } from "../types/auth";
import api from "./api";
import { jwtDecode } from 'jwt-decode';

const uploadApi = axios.create({
    baseURL: 'http://192.168.0.101:3000',
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
    },
});

class AuthServices {
    async uploadImage(formDataUser: FormData) {
        console.log('Datos imagen services: ', formDataUser)
        try {
            const response = await uploadApi.post('/upload', formDataUser, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (e) {
            console.log('Error detallado:', e.response?.data || e.message);
            throw e;
        }
    }
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
                    role: decodedToken.role,
                    firstName: decodedToken.firstName,
                    lastName: decodedToken.lastName
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