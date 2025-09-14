// src/navigation/AppNavigator.tsx
import React, { useEffect } from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';
import { useAuth } from '../context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

const AppNavigator = () => {
  const { isAuthenticated, loading, user } = useAuth();

  useEffect(() => {
    console.log('AppNavigator: isAuthenticated cambió:', isAuthenticated, 'user:', user, 'loading:', loading);
  }, [isAuthenticated, user, loading]);

  console.log('AppNavigator render: isAuthenticated:', isAuthenticated, 'user:', user, 'loading:', loading);

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