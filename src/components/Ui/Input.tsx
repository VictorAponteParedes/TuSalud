// // src/components/ui/Input.tsx
// import React from 'react';
// import { COLORS } from '../core/assets/colors/colors';
// import { StyleSheet, TextInput, TextInputProps } from 'react-native';
// import { FONTS } from '../core/assets/fonts';
// import { useController } from 'react-hook-form';

// const { primary, border, card, secondary } = COLORS;

// interface Props extends TextInputProps {
//   control: any;
//   name: string
// }

// const InputText: React.FC<Props> = ({ name,control, ...props }) => {
//     const {field} = useController({control,defaultValue:"",name});
//   return <TextInput style={styles.input} value={field.value} onChangeText={field.onChange} {...props} />;
// };

// export default InputText;

// const styles = StyleSheet.create({
//   input: {
//     borderWidth: 1,
//     borderColor: border,
//     fontFamily: FONTS.regular as string,
//     color: card.foreground,
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     marginTop: 5,
//   },
// });
import React from 'react';
import {Controller, useController} from 'react-hook-form';
import {TextInput, Text, View, StyleSheet, TextInputProps} from 'react-native';
import {InputProps} from '../../types/InputCustom';

const Input = (props: InputProps) => {
  const {label, error, control, name, requered, ...textInputProps} = props;

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Controller
        control={control}
        name={name}
        rules={{required: requered}}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
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
