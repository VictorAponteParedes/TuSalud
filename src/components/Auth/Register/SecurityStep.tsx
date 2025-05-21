// src/components/Auth/RegisterSteps/SecurityStep.tsx
import React from 'react';
import Input from '../../ui/Input';
import { translate } from '../../../lang';
import {Lock} from '../../../helpers';

const SecurityStep = ({control}: {control: any}) => (
  <>
    <Input
      label={translate('security.password')}
      placeholder={translate('security.insertPassword')}
      control={control}
      name="password"
      secureTextEntry
      iconName={<Lock />}
    />
    <Input
      label={translate('security.confirmPassword')}
      placeholder={translate('security.confirmPassword')}
      control={control}
      name="confirmPassword"
      secureTextEntry
      iconName={<Lock />}
    />
  </>
);

export default SecurityStep;
