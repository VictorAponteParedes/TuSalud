// src/navigation/AppNavigator.tsx
import React from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

const AppNavigator = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return null;
  }

  return isAuthenticated ? (
    <ProtectedRoute>
      <MainNavigator />
    </ProtectedRoute>
  ) : (
    <AuthNavigator />
  );
};

export default AppNavigator;