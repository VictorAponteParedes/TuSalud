import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { translate } from '../../../lang';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../navigation/routes';

import styles from './styles';
import { Text } from 'react-native-gesture-handler';
import { useForm } from 'react-hook-form';
import { LoginFormData } from '../../../types/auth';

const LoginForm = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    console.log('Login data:', data);
  };
  return (
    <View style={styles.form}>
      <Input
        label={translate('Username')}
        placeholder={translate("InsertUsername")}
        control={control}
        name="email"
        requered={true}
      />
      <Input
        label={translate('Password')}
        placeholder={translate("InsertPassword")}
        secureTextEntry={true}
        control={control}
        name="password"
        requered={true}
      />
      <Button
        title={translate('Login')}
        onPress={() => handleSubmit(onSubmit)()}
        loading={false}
        disabled={false}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.REGISTER)}
        style={styles.registerButton}
      >
        <Text style={styles.registerText}>
          {translate('DontHaveAccount')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;
