// src/components/Auth/RegisterSteps/SecurityStep.tsx
import React from 'react';
import Input from '../../ui/Input';
import { translate } from '../../../lang';

const SecurityStep = ({ control }: { control: any }) => (
    <>
        <Input label={translate('security.password')} placeholder={translate('security.insertPassword')} control={control} name="password" secureTextEntry />
        <Input label={translate('security.confirmPassword')} placeholder={translate('security.confirmPassword')} control={control} name="confirmPassword" secureTextEntry />
    </>
);

export default SecurityStep;
