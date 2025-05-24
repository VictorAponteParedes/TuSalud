// src/components/Auth/RegisterSteps/SecurityStep.tsx
import React from 'react';
import SecureInput from '../../ui/SecureInput';
import { translate } from '../../../lang';
import { Lock } from '../../../helpers';

const SecurityStep = ({ control }: { control: any }) => (
  <>
    <SecureInput
      label={translate('security.password')}
      placeholder={translate('security.insertPassword')}
      control={control}
      name="password"
      iconName={<Lock />}
    />
    <SecureInput
      label={translate('security.confirmPassword')}
      placeholder={translate('security.confirmPassword')}
      control={control}
      name="confirmPassword"
      iconName={<Lock />}
    />
  </>
);

export default SecurityStep;