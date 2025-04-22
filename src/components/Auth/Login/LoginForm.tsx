import React from 'react';
import {View, TextInput} from 'react-native';
import Button from '../../../components/Ui/Button';
import Input from '../../Ui/Input';

import styles from './styles';

const LoginForm = () => {
  return (
    <View style={styles.form}>
      <Input
        label="Nombre de usuario"
        placeholder="Ingresa tu nombre de usuario"
      />
      <Input
        label="Contraseña"
        placeholder="Ingresa tu contraseña"
        secureTextEntry={true}
      />
      <Button
        title="Iniciar sesión"
        onPress={() => console.log('Botón presionado')}
        loading={false}
        disabled={false}
      />
    </View>
  );
};

export default LoginForm;
