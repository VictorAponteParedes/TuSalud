// src/components/Auth/RegisterSteps/MedicalInfoStep.tsx
import React from 'react';
import Input from '../../ui/Input';
import DateInput from '../../ui/DateInput'; // Importa el nuevo componente
import { translate } from '../../../lang';
import { Calendar, Drop, Phone, Virus } from '../../../helpers';

const MedicalInfoStep = ({ control }: { control: any }) => (
  <>
    <DateInput
      label={translate('medicalInformation.birthDateLabel')}
      placeholder={translate('medicalInformation.birthDateInput')}
      control={control}
      name="dateBirth"
      iconName={<Calendar />}
    />

    <Input
      label={translate('medicalInformation.bloodTypeLabel')}
      placeholder={translate('medicalInformation.bloodTypeInput')}
      control={control}
      name="bloodType"
      iconName={<Drop />}
    />

    <Input
      label={translate('medicalInformation.allergiesLabel')}
      placeholder={translate('medicalInformation.bloodTypeInput')}
      control={control}
      name="allergies"
      iconName={<Virus />}
    />

    <Input
      label={translate('medicalInformation.emergencyContactLabel')}
      placeholder={translate('medicalInformation.emergencyContactInput')}
      control={control}
      name="contactEmergency"
      iconName={<Phone />}
    />
  </>
);

export default MedicalInfoStep;