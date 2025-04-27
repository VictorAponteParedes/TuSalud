// src/screens/Auth/RegisterScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RegisterForm from '../../../components/Auth/Register/RegisterForm';
import styles from './styles';
import CustomHeader from '../../../components/customHeader';
import { translate } from '../../../lang';

const RegisterScreen = () => {
  return (
    <>
      <CustomHeader titleBack={translate('backToLogin')} />
      <View style={styles.container}>
        <Text style={styles.title}>{translate('welcome')}</Text>
        <View style={styles.modal}>
          <RegisterForm />
        </View>
      </View>
    </>
  );
};

export default RegisterScreen;


