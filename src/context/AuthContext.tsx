// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { Alert } from 'react-native';
import AuthServices from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}

interface AuthContextProps {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const { loginUser } = new AuthServices()

    useEffect(() => {
        const loadAuthData = async () => {
            try {
                const token = await AsyncStorage.getItem('authToken');
                const userData = await AsyncStorage.getItem('user');

                if (token && userData) {
                    setUser(JSON.parse(userData));
                }
            } catch (error) {
                console.error('Error loading auth data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadAuthData();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await loginUser({ email, password });

            if (!response.user) {
                throw new Error('Datos de usuario no recibidos');
            }

            await AsyncStorage.setItem('authToken', response.access_token);
            await AsyncStorage.setItem('user', JSON.stringify(response.user));

            setUser(response.user);
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