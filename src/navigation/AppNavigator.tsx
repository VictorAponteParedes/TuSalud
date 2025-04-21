// src/navigation/AppNavigator.tsx

import React from 'react';
import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';


const isAuthenticated = false;

const AppNavigator = () => {
  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
};

export default AppNavigator;
