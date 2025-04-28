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
import { useAuth } from '../../../context/AuthContext';
import Toast from 'react-native-toast-message';

const LoginForm = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormData>();
  const {login} = useAuth();

  const onSubmit = (data: LoginFormData) => {
    if (data.email === 'prueba@gmail.com' && data.password === '123456') {
      login();
      Toast.show({
        type: 'success',
        position: 'top',
        text1: translate('credentialSuccess'),
        text2: translate('welcomeHome'),
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
        text1Style: {color: 'black'},
        text2Style: {color: 'black'},
      });
    } else {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: translate('titleIvalidCredentials'),
        text2: translate('InvalidCredentials'),
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
        text1Style: {color: 'black'},
        text2Style: {color: 'black'},
      });
    }
  };

  return (
    <View style={styles.form}>
      <Input
        label={translate('Username')}
        placeholder={translate('InsertUsername')}
        control={control}
        name="email"
        requered={true}
        error={translate('usernameRequerd')}
      />
      <Input
        label={translate('Password')}
        placeholder={translate('InsertPassword')}
        secureTextEntry={true}
        control={control}
        name="password"
        requered={true}
        error={translate('passwordRequerd')}
      />
      <Button
        title={translate('Login')}
        onPress={() => handleSubmit(onSubmit)()}
        loading={false}
        disabled={false}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.REGISTER)}
        style={styles.registerButton}>
        <Text style={styles.registerText}>{translate('DontHaveAccount')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginForm;