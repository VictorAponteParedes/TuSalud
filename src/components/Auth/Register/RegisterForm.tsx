// src/components/Auth/RegisterForm.tsx

import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import { translate } from '../../../lang';
import { RegisterFormData } from '../../../types/auth';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import colors from '../../../theme/colors';
import { fontsOpenSans } from '../../../types/fonts';
import sizeText from '../../../theme/size';

import PersonalInfoStep from './PersonalInfoStep';
import MedicalInfoStep from './MedicalInfoStep';
import SecurityStep from './SecurityStep';


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


