// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import AuthServices from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}

interface AuthContextProps {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password?: string, biometricData?: { access_token: string, user: User }) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const { loginUser } = new AuthServices();

    useEffect(() => {
        const loadAuthData = async () => {
            try {
                const token = await AsyncStorage.getItem('authToken');
                const userData = await AsyncStorage.getItem('user');

                if (token && userData) {
                    const parsedUser = JSON.parse(userData);
                    setUser(parsedUser);
                    console.log('AuthContext: Usuario cargado desde AsyncStorage:', parsedUser);
                }
            } catch (error) {
                console.error('Error loading auth data:', error);
            } finally {
                setLoading(false);
                console.log('AuthContext: Loading finalizado, isAuthenticated:', !!user);
            }
        };

        loadAuthData();
    }, []);

    useEffect(() => {
        console.log('AuthContext: isAuthenticated cambió:', !!user, 'user:', user);
    }, [user]);

    const login = async (email: string, password?: string, biometricData?: { access_token: string, user: User }) => {
        try {
            let response;
            if (biometricData) {
                response = biometricData;
            } else if (password) {
                response = await loginUser({ email, password });
            } else {
                throw new Error('Se requiere contraseña o datos biométricos');
            }

            if (!response.user || !response.access_token) {
                throw new Error('Datos de usuario o token no recibidos');
            }

            await AsyncStorage.setItem('authToken', response.access_token);
            await AsyncStorage.setItem('user', JSON.stringify(response.user));
            setUser(response.user);
            console.log('AuthContext: Login exitoso, usuario establecido:', response.user, 'isAuthenticated:', !!response.user);
            console.log('AsyncStorage post-login:', {
                token: await AsyncStorage.getItem('authToken'),
                user: await AsyncStorage.getItem('user'),
            });
        } catch (error) {
            console.error('Login error:', error);
            Alert.alert(
                'Error',
                error.message || 'Error al iniciar sesión. Por favor intenta nuevamente.'
            );
            throw error;
        }
    };

    const logout = async () => {
        try {
            await AsyncStorage.removeItem('authToken');
            await AsyncStorage.removeItem('user');
            setUser(null);
            console.log('AuthContext: Logout exitoso, isAuthenticated:', false);
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated: !!user,
            user,
            login,
            logout,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};