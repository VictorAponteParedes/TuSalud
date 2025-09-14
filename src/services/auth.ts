// src/services/AuthServices.ts
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { RegisterFormData, LoginFormData, ForgotPasswordData, ResetPassword } from "../types/auth";
import api from "./api";
import { API_BASE_URL } from "../constants";

const uploadApi = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Accept': 'application/json',
    },
});

class AuthServices {
    async getProfileImage(userId: any) {
        try {
            const response = await api.get(`/users/${userId}/profile-image`);
            console.log("Dat perfil imagen: ", response.data.url);
            return response.data.url;
        } catch (error) {
            console.log('Error al obtener imagen de perfil', error);
            return null;
        }
    }

    async uploadImage(formDataUser: FormData) {
        console.log('Datos imagen services: ', formDataUser);
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
            const response = await api.post('/users/register', userData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response.data;
        } catch (error) {
            console.log('Error completo al registrar:', error);

            if (axios.isAxiosError(error)) {
                console.log('Datos del error:', {
                    status: error.response?.status,
                    data: error.response?.data,
                    headers: error.response?.headers
                });

                const errorMessage = error.response?.data?.message ||
                    error.response?.data?.error ||
                    'Error al registrar el usuario';
                throw new Error(errorMessage);
            }

            throw new Error(error.message || "Error desconocido al registrar el usuario");
        }
    }

    async loginUser(loginData: LoginFormData) {
        try {
            const response = await api.post('/auth/login', loginData);
            const decodedToken = jwtDecode(response.data.access_token);

            console.log("Descodificando token user: ", decodedToken);

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
            if (axios.isAxiosError(error)) {
                throw new Error(
                    error.response?.data?.message ||
                    error.response?.data?.error ||
                    'Credenciales inválidas'
                );
            }
            throw new Error('Error de conexión al iniciar sesión');
        }
    }

    async getUserInformation(token: any) {
        try {
            const response = await api.get('/auth/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            console.log("user data information: ", response.data);
            return response.data;
        } catch (e) {
            console.log('Error detallado:', e.response?.data || e.message);
            throw e;
        }
    }

    async forgotPasswordUser(email: string) {
        console.log("datos recibidos forgot pass: ", email);
        try {
            const response = await api.post('/users/forgot-password', { email });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(
                    error.response?.data?.message ||
                    error.response?.data?.error ||
                    'Credenciales inválidas'
                );
            }
            throw new Error('Error de conexión al reestablecer contraseña');
        }
    }

    async resetPasswordUser({ code, newPassword }: ResetPassword) {
        try {
            const response = await api.post('/users/reset-password', {
                code,
                newPassword
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(
                    error.response?.data?.message ||
                    error.response?.data?.error ||
                    'Error al reestablecer contraseña'
                );
            }
            throw new Error('Error de conexión al reestablecer contraseña');
        }
    }

    // NUEVO: Métodos para autenticación biométrica
    async generateBiometricChallenge(email: string) {
        try {
            console.log('Solicitando challenge biométrico para:', email);
            const response = await api.post('/auth/biometric/challenge', { email });
            console.log('Challenge biométrico obtenido:', response.data);
            return response.data; // { challengeId, challenge }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('Error al obtener challenge:', error.response?.data || error.message);
                throw new Error(
                    error.response?.data?.message ||
                    error.response?.data?.error ||
                    'Error al generar challenge biométrico'
                );
            }
            throw new Error('Error de conexión al generar challenge biométrico');
        }
    }

    async registerBiometric(email: string, publicKey: string) {
        try {
            console.log('Registrando clave biométrica para:', email);
            const response = await api.post('/auth/biometric/register', {
                email,
                publicKey,
            });
            console.log('Clave biométrica registrada:', response.data);
            return response.data; // { message }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('Error al registrar biometría:', error.response?.data || error.message);
                throw new Error(
                    error.response?.data?.message ||
                    error.response?.data?.error ||
                    'Error al registrar clave biométrica'
                );
            }
            throw new Error('Error de conexión al registrar clave biométrica');
        }
    }

    async verifyBiometricLogin(email: string, challengeId: string, signature: string) {
        try {
            console.log('Verificando login biométrico para:', email, 'challengeId:', challengeId);
            const response = await api.post('/auth/biometric/login', {
                email,
                challengeId,
                signature,
            });
            console.log('Respuesta del login biométrico:', response.data);
            return response.data; // { access_token, user }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.log('Error al verificar login biométrico:', error.response?.data || error.message);
                throw new Error(
                    error.response?.data?.message ||
                    error.response?.data?.error ||
                    'Error al verificar login biométrico'
                );
            }
            throw new Error('Error de conexión al verificar login biométrico');
        }
    }
}

export default AuthServices;