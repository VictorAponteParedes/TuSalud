// src/components/ui/Input.tsx

import React from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, Text, View, StyleSheet, TextInputProps } from 'react-native';


interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  control: any;
  name: string;
  requered?: boolean;
}


const Input = (props: InputProps) => {
  const { label, error, control, name, requered, ...textInputProps } = props;


  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Controller
        control={control}
        name={name}
        rules={{ required: requered }}
        render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
          <TextInput
            style={[styles.input, error && styles.inputError]}
            placeholderTextColor="#999"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            {...textInputProps}
          />
        )}

      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    marginTop: 4,
    color: 'red',
    fontSize: 12,
  },
});

export default Input;
