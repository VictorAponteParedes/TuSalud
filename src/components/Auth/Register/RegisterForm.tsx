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
import Toast from 'react-native-toast-message';


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

      let imageUrl = null;
      if (formData._parts.length > 0) {
        const uploadResponse = await uploadImage(formData);
        imageUrl = uploadResponse.id;
        console.log('Imagen subida:', uploadResponse);
      }

      // Registrar usuario
      const userData = {
        ...data,
        profileImageId: imageUrl
      };

      console.log('Datos del usuario a registrar:', userData);

      const response = await registerUser(userData);
      Toast.show({
        type: 'success',
        position: 'top',
        text1: translate('credentialSuccess'),
        text2: translate('welcomeHome'),
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
        text1Style: { color: colors.black },
        text2Style: { color: colors.black },
      });


      navigation.navigate(Routes.LOGIN);
    } catch (error) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: translate('titleIvalidCredentials'),
        text2: error.message || translate('InvalidCredentials'),
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
        text1Style: { color: colors.black },
        text2Style: { color: colors.black },
      });
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


