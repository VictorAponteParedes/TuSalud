// src/screens/Auth/RegisterScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RegisterForm from '../../../components/Auth/Register/RegisterForm';
import styles from './styles';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Cuenta</Text>
      <RegisterForm />
    </View>
  );
};

export default RegisterScreen;


