import React from 'react';
import { View, TextInput } from 'react-native';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { translate } from '../../../lang';

import styles from './styles';

const LoginForm = () => {
  return (
    <View style={styles.form}>
      <Input
        label={translate('Username')}
        placeholder={translate("InsertUsername")}
      />
      <Input
        label={translate('Password')}
        placeholder={translate("InsertPassword")}
        secureTextEntry={true}
      />
      <Button
        title={translate('Login')}
        onPress={() => console.log('Botón presionado')}
        loading={false}
        disabled={false}
      />
    </View>
  );
};

export default LoginForm;
