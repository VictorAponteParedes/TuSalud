// src/screens/Auth/RegisterScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RegisterForm from '../../../components/Auth/Register/RegisterForm';
import styles from './styles';
import CustomHeader from '../../../components/customHeader';
import { translate } from '../../../lang';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomHeader
        onBackPress={navigation.goBack}
        iconBack={true}
        titleBack={translate('backToLogin')}
      />
      <View style={styles.container}>
        <View style={styles.modal}>
          <RegisterForm />
        </View>
      </View>
    </>
  );
};

export default RegisterScreen;


