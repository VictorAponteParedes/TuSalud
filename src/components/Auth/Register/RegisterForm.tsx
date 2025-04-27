// src/components/Auth/RegisterForm.tsx

import React from 'react';
import { View, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';
import { translate } from '../../../lang';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../navigation/routes';
import CustomHeader from '../../customHeader';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

type RegisterFormData = {
  fullName: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();
  const navigation = useNavigation();

  const onSubmit = (data: RegisterFormData) => {
    console.log('Register data:', data);
  };

  return (
    <View style={styles.form}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          label={translate('firstName')}
          placeholder={translate("insertFirstName")}
        />
        <Input
          label={translate('lastName')}
          placeholder={translate("insertLastName")}

        />
        <Input
          label={translate('phone')}
          placeholder={translate("insertPhone")}
        />
        <Input
          label={translate('address')}
          placeholder={translate("insertAddress")}

        />
        <Input
          label={translate('email')}
          placeholder={translate("insertEmail")}
        />
        <Input
          label={translate('password')}
          placeholder={translate("insertPassword")}
          secureTextEntry={true}
        />
        <Input
          label={translate('confirmPassword')}
          placeholder={translate("insertConfirmPassword")}
          secureTextEntry={true}
        />
      </ScrollView>
      <Button
        title={translate('title')}
        onPress={() => console.log('Botón presionado')}
        loading={false}
        disabled={false}
      />

    </View>
  );
};

export default RegisterForm;


