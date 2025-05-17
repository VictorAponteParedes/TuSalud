// src/components/Auth/RegisterSteps/PersonalInfoStep.tsx
import React, { useState } from 'react';
import Input from '../../ui/Input';
import InputImage from '../../ui/InputImage';
import { translate } from '../../../lang';
import { Control, UseFormSetValue } from 'react-hook-form';
import { RegisterFormData } from '../../../types/auth';

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
            />
            <Input
                label={translate('personalInfo.lastName')}
                placeholder={translate('personalInfo.insertLastName')}
                control={control}
                name="lastName"
            />
            <Input
                label={translate('personalInfo.phone')}
                placeholder={translate('personalInfo.insertPhone')}
                control={control}
                name="phone"
            />
            <Input
                label={translate('personalInfo.address')}
                placeholder={translate('personalInfo.insertAddress')}
                control={control}
                name="address"
            />
            <Input
                label={translate('personalInfo.email')}
                placeholder={translate('personalInfo.insertEmail')}
                control={control}
                name="email"
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <InputImage
                label="Foto de perfil"
                onImageSelected={onImageSelected}
                imageUri={imageUri}
            />
        </>
    )
};

export default PersonalInfoStep;
