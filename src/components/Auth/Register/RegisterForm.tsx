// src/components/Auth/RegisterForm.tsx

import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import { translate } from '../../../lang';
import Input from '../../ui/Input';
import { RegisterFormData } from '../../../types/auth';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import colors from '../../../theme/colors';
import { fontsOpenSans } from '../../../types/fonts';
import sizeText from '../../../theme/size';

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log('Register data:', data);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', fontFamily: fontsOpenSans.regular, fontSize: sizeText.title.title }}>{translate('welcome')}</Text>
      <ProgressSteps
        activeStepIconBorderColor={colors.primary[400]}
        completedProgressBarColor={colors.primary[400]}
        activeStepIconColor={colors.primary[400]}
        completedStepIconColor={colors.primary[400]}
        labelFontFamily={fontsOpenSans.regular}
        labelColor={colors.black}
        activeLabelColor={colors.primary[400]}
        disabledStepNumColor={colors.primary[400]}
        completedCheckColor={colors.white}
        activeStep={0}>

        <ProgressStep
          label="Datos personales"
          buttonNextText="Seguiente"
          buttonPreviousText="Atras"
          buttonFillColor={colors.primary[400]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label={translate('firstName')}
              placeholder={translate('insertFirstName')}
              control={control}
              name="firstName"
            />
            <Input
              label={translate('lastName')}
              placeholder={translate('insertLastName')}
              control={control}
              name="lastName"
            />
            <Input
              label={translate('phone')}
              placeholder={translate('insertPhone')}
              control={control}
              name="phone"
            />
            <Input
              label={translate('address')}
              placeholder={translate('insertAddress')}
              control={control}
              name="address"
            />
            <Input
              label={translate('email')}
              placeholder={translate('insertEmail')}
              control={control}
              name="email"
            />
          </ScrollView>
        </ProgressStep>
        <ProgressStep
          label="Credenciales"
          buttonNextText="Siguiente"
          buttonPreviousText="Atras"
          buttonFinishText="Registrarse"
          onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={translate('password')}
            placeholder={translate('insertPassword')}
            secureTextEntry={true}
            control={control}
            name="password"
          />
          <Input
            label={translate('confirmPassword')}
            placeholder={translate('insertConfirmPassword')}
            secureTextEntry={true}
            control={control}
            name="confirmPassword"
          />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default RegisterForm;


