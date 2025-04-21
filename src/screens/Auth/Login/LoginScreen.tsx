
import React from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './styles';

const LoginForm = () => {
  return (
    <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Correo electrónico" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
      <Button title="Ingresar" onPress={() => console.log('Login pressed')} />
    </View>
  );
};

export default LoginForm;