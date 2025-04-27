// src/components/Auth/RegisterForm.tsx

import React from 'react';
import { View, ScrollView } from 'react-native';
import { useForm } from 'react-hook-form';
import styles from './styles';
import { translate } from '../../../lang';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { RegisterFormData } from '../../../types/auth';



const RegisterForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();


  const onSubmit = (data: RegisterFormData) => {
    console.log('Register data:', data);
  };

  return (
    <View style={styles.form}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Input
          label={translate('firstName')}
          placeholder={translate("insertFirstName")}
          control={control}
          name="firstName"
        />
        <Input
          label={translate('lastName')}
          placeholder={translate("insertLastName")}
          control={control}
          name="lastName"

        />
        <Input
          label={translate('phone')}
          placeholder={translate("insertPhone")}
          control={control}
          name="phone"
        />
        <Input
          label={translate('address')}
          placeholder={translate("insertAddress")}
          control={control}
          name="address"

        />
        <Input
          label={translate('email')}
          placeholder={translate("insertEmail")}
          control={control}
          name="email"
        />
        <Input
          label={translate('password')}
          placeholder={translate("insertPassword")}
          secureTextEntry={true}
          control={control}
          name="password"
        />
        <Input
          label={translate('confirmPassword')}
          placeholder={translate("insertConfirmPassword")}
          secureTextEntry={true}
          control={control}
          name="confirmPassword"
        />
      </ScrollView>
      <Button
        title={translate('title')}
        onPress={() => handleSubmit(onSubmit)()}
        loading={false}
        disabled={false}
      />

    </View>
  );
};

export default RegisterForm;


