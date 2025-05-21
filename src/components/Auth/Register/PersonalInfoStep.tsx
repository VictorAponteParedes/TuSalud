// src/components/Auth/RegisterSteps/PersonalInfoStep.tsx
import React, { useState } from 'react';
import Input from '../../ui/Input';
import InputImage from '../../ui/InputImage';
import { translate } from '../../../lang';
import { Control, UseFormSetValue } from 'react-hook-form';
import { RegisterFormData } from '../../../types/auth';
import {Directions, Email, Phone, Profile} from '../../../helpers';

const PersonalInfoStep = ({
    control,
    setValue,
}: {
    control: Control<RegisterFormData>;
    setValue: UseFormSetValue<RegisterFormData>;
}) => {


    const [imageUri, setImageUri] = useState<string | undefined>();

    const onImageSelected = (image: any) => {
        setImageUri(image.uri);
        setValue('profileImage', image);
    };

    return (
      <>
        <Input
          label={translate('personalInfo.name')}
          placeholder={translate('personalInfo.insertName')}
          control={control}
          name="firstName"
          iconName={<Profile />}
        />
        <Input
          label={translate('personalInfo.lastName')}
          placeholder={translate('personalInfo.insertLastName')}
          control={control}
          name="lastName"
          iconName={<Profile />}
        />
        <Input
          label={translate('personalInfo.phone')}
          placeholder={translate('personalInfo.insertPhone')}
          control={control}
          name="phone"
          iconName={<Phone />}
        />
        <Input
          label={translate('personalInfo.address')}
          placeholder={translate('personalInfo.insertAddress')}
          control={control}
          name="address"
          iconName={<Directions />}
        />
        <Input
          label={translate('personalInfo.email')}
          placeholder={translate('personalInfo.insertEmail')}
          control={control}
          name="email"
          keyboardType="email-address"
          autoCapitalize="none"
          iconName={<Email />}
        />
        <InputImage
          label="Foto de perfil"
          onImageSelected={onImageSelected}
          imageUri={imageUri}
        />
      </>
    );
};

export default PersonalInfoStep;
