// src/navigation/AuthNavigator.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/Login/LoginScreen';
import RegisterScreen from '../screens/Auth/Register/RegisterScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPassword';
import ResetPasswordScreen from '../screens/Auth/ResetPassword';
import Routes from './routes';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={Routes.REGISTER} component={RegisterScreen} />
      <Stack.Screen
        name={Routes.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen
        name={Routes.RESET_PASSWORD}
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
