import React from 'react';
import { View, Text, Image } from 'react-native';
import LoginForm from '../../../components/Auth/Login/LoginForm';
import styles from './styles';
import {translate} from '../../../lang';
import {salud360Logo} from '../../../assets';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={salud360Logo} style={styles.logo} />
      <Text style={styles.title}>{translate('WelcomeBack')}</Text>
      <Text style={styles.subTitle}>{translate('Login')}</Text>
      <View style={styles.modal}>
        <LoginForm />
      </View>
    </View>
  );
};

export default LoginScreen;
