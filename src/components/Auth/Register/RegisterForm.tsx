// src/components/Auth/RegisterForm.tsx

import React, { useState } from 'react';
import { View, ScrollView, Text, Platform } from 'react-native';
import { useForm } from 'react-hook-form';
import { translate } from '../../../lang';
import { RegisterFormData } from '../../../types/auth';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import colors from '../../../theme/colors';
import { fontsOpenSans } from '../../../types/fonts';
import sizeText from '../../../theme/size';
import Routes from '../../../navigation/routes';
import { useNavigation } from '@react-navigation/native';
import PersonalInfoStep from './PersonalInfoStep';
import MedicalInfoStep from './MedicalInfoStep';
import SecurityStep from './SecurityStep';
import AuthServices from '../../../services/auth';


const RegisterForm = () => {
  const navigation = useNavigation()
  const { registerUser, uploadImage } = new AuthServices()
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<RegisterFormData>();


  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log('Datos antes de subir imagen:', data);

      const formData = new FormData();

      if (data.profileImage) {
        const imageUri = Platform.OS === 'android'
          ? data.profileImage.uri
          : data.profileImage.uri.replace('file://', '');

        formData.append('file', {
          uri: imageUri,
          type: data.profileImage.type || 'image/jpeg',
          name: data.profileImage.fileName || `profile_${Date.now()}.jpg`,
        });
      }

      console.log('FormData a enviar:', formData);

      const uploadResponse = await uploadImage(formData);
      console.log('Imagen subida:', uploadResponse);

      const userData = {
        ...data,
        profileImage: uploadResponse.url,
      };

      const response = await registerUser(userData);
      console.log('Usuario registrado:', response);

      navigation.navigate(Routes.LOGIN);
    } catch (error) {
      console.log('Error completo al registrar:', error);
      if (error.response) {
        console.log('Respuesta del error:', error.response.data);
      }
    }
  };



  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', fontFamily: fontsOpenSans.regular, fontSize: sizeText.title.title }}>{translate('welcome')}</Text>
      <ProgressSteps
        activeStepIconBorderColor={colors.primary[400]}
        completedProgressBarColor={colors.primary[400]}
        completedStepIconColor={colors.primary[400]}
        labelFontFamily={fontsOpenSans.regular}
        activeLabelColor={colors.primary[400]}
        disabledStepNumColor={colors.primary[400]}
        completedCheckColor={colors.white}
        activeStep={0}>

        <ProgressStep
          label={translate('personalInfo.title')}
          buttonNextText={translate('buttons.next')}
          buttonPreviousText={translate('buttons.preview')}
          buttonFillColor={colors.primary[400]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <PersonalInfoStep
              control={control}
              setValue={setValue}
            />
          </ScrollView>
        </ProgressStep>


        <ProgressStep
          label={translate('medicalInformation.title')}
          buttonNextText={translate('buttons.next')}
          buttonPreviousText={translate('buttons.preview')}
          buttonFillColor={colors.primary[400]}
          buttonPreviousTextColor={colors.primary[400]}
          buttonBorderColor={colors.primary[400]}
        >
          <MedicalInfoStep control={control} />
        </ProgressStep>


        <ProgressStep
          label={translate('security.title')}
          buttonNextText={translate('buttons.next')}
          buttonPreviousText={translate('buttons.preview')}
          buttonFinishText={translate('buttons.register')}
          buttonPreviousTextColor={colors.primary[400]}
          buttonFillColor={colors.primary[400]}
          buttonBorderColor={colors.primary[400]}
          onSubmit={handleSubmit(onSubmit)}
        >
          <SecurityStep control={control} />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default RegisterForm;


