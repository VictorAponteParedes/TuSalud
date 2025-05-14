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
            name="dateBirth"
        />

        <Input
            label={translate('medicalInformation.bloodTypeLabel')}
            placeholder={translate('medicalInformation.bloodTypeInput')}
            control={control}
            name="bloodType" />

        <Input
            label={translate('medicalInformation.allergiesLabel')}
            placeholder={translate('medicalInformation.bloodTypeInput')}
            control={control}
            name="allergies" />

        <Input
            label={translate('medicalInformation.emergencyContactLabel')}
            placeholder={translate('medicalInformation.emergencyContactInput')}
            control={control}
            name="contactEmergency" />

    </>
);

export default MedicalInfoStep;
