// src/components/Auth/RegisterSteps/PersonalInfoStep.tsx
import React from 'react';
import Input from '../../ui/Input';
import { translate } from '../../../lang';

const PersonalInfoStep = ({ control }: { control: any }) => (
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
    </>
);

export default PersonalInfoStep;
