// src/components/Auth/RegisterSteps/MedicalInfoStep.tsx
import React from 'react';
import Input from '../../ui/Input';
import { translate } from '../../../lang';

const MedicalInfoStep = ({ control }: { control: any }) => (
    <>
        <Input
            label={translate('medicalInformation.birthDateLabel')}
            placeholder={translate('medicalInformation.birthDateInput')}
            control={control}
            name="dataBorth"
        />

        <Input label={translate('medicalInformation.bloodTypeLabel')} placeholder={translate('medicalInformation.bloodTypeInput')} control={control} name="typeBloot" />
        <Input label={translate('medicalInformation.allergiesLabel')} placeholder={translate('medicalInformation.bloodTypeInput')} control={control} name="alergias" />
        <Input label={translate('medicalInformation.emergencyContactLabel')} placeholder={translate('medicalInformation.emergencyContactInput')} control={control} name="contactEmergecy" />
    </>
);

export default MedicalInfoStep;
