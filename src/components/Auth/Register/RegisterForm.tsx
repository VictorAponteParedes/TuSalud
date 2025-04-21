// src/components/Auth/RegisterForm.tsx

import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';

type RegisterFormData = {
  fullName: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log('Register data:', data);
  };

  return (
    <View style={styles.form}>
      <Controller
        control={control}
        name="fullName"
        rules={{ required: 'Nombre completo es requerido' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.fullName && <Text style={styles.error}>{errors.fullName.message}</Text>}

      <Controller
        control={control}
        name="email"
        rules={{ required: 'Correo es requerido' }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        rules={{ required: 'Contraseña es requerida', minLength: { value: 6, message: 'Mínimo 6 caracteres' } }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Button title="Registrarme" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default RegisterForm;


