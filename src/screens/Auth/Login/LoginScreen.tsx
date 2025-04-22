import React from 'react';
import {View, Text, Image} from 'react-native';
import LoginForm from '../../../components/Auth/Login/LoginForm';
import {logoInicial} from '../../../assets';
import styles from './styles';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={logoInicial} style={styles.logo} />
      <Text style={styles.title}>Bienvenido de nuevo!</Text>
      <Text style={styles.subTitle}>Inicia sesión para continuar</Text>
      <View style={styles.modal}>
        <LoginForm />
      </View>
    </View>
  );
};

export default LoginScreen;
