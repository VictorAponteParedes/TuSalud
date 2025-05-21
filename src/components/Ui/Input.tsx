import React from 'react';
import {Controller, useController} from 'react-hook-form';
import {TextInput, Text, View, StyleSheet, TextInputProps} from 'react-native';
import {InputProps} from '../../types/InputCustom';
import {fontsOpenSans} from '../../types/fonts';
import SvgWrapper from '../SvgWrapper';
import colors from '../../theme/colors';

const Input = (props: InputProps) => {
  const {label, error, control, name, requered, iconName, ...textInputProps} = props;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {iconName && (
          <View style={styles.iconContainer}>
            <SvgWrapper color={colors.primary[400]} size={20}>
              {iconName}
            </SvgWrapper>
          </View>
        )}
        <Controller
          control={control}
          name={name}
          rules={{required: requered}}
          render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
            <TextInput
              style={[
                styles.input, 
                error && styles.inputError,
                iconName && styles.inputWithIcon // Añade padding si hay icono
              ]}
              placeholderTextColor="#999"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              {...textInputProps}
            />
          )}
        />
      </View>
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
    fontFamily: fontsOpenSans.regular,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  iconContainer: {
    paddingLeft: 12,
    paddingRight: 8,
  },
  input: {
    height: 48,
    flex: 1,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: fontsOpenSans.regular,
  },
  inputWithIcon: {
    paddingLeft: 0, // Reducimos el padding izquierdo cuando hay icono
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    marginTop: 4,
    color: 'red',
    fontSize: 12,
    fontFamily: fontsOpenSans.regular,
  },
});

export default Input;