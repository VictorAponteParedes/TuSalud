// src/navigation/ProtectedRoute.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ActivityIndicator, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Routes from './routes';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, loading } = useAuth();
    const navigation = useNavigation();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!isAuthenticated) {
        navigation.navigate(Routes.LOGIN);
        return null;
    }

    return <>{children}</>;
};

export default ProtectedRoute;