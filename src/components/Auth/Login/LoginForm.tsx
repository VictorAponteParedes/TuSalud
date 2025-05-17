// src/components/Auth/LoginForm.tsx
import React, { useState } from 'react';
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
import colors from '../../../theme/colors';

const LoginForm = () => {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    console.log("Datos en  antes onsumit:", data.email, data.password)
    try {
      setIsLoading(true);
      await login(data.email, data.password);

      Toast.show({
        type: 'success',
        position: 'top',
        text1: translate('successRegister.title'),
        text2: translate('successRegister.subTile'),
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
        text1Style: { color: colors.black },
        text2Style: { color: colors.black },
      });

      console.log("Datos en  onsumit:", data.email, data.password)
    } catch (error: any) {
      Toast.show({
        type: 'error',
        position: 'top',
        text1: translate('errorRegister.title'),
        text2: error.message || translate('errorRegister.subTitle'),
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
        text1Style: { color: colors.black },
        text2Style: { color: colors.black },
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.form}>
      <Input
        label={translate('email')}
        placeholder={translate('email')}
        control={control}
        name="email"
        rules={{
          required: translate('usernameRequerd'),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: translate('invalidEmailFormat')
          }
        }}
        error={errors.email?.message}
      />

      <Input
        label={translate('Password')}
        placeholder={translate('InsertPassword')}
        secureTextEntry={true}
        control={control}
        name="password"
        rules={{
          required: translate('passwordRequerd'),
          minLength: {
            value: 6,
            message: translate('passwordMinLength')
          }
        }}
        error={errors.password?.message}
      />

      <Button
        title={translate('Login')}
        onPress={handleSubmit(onSubmit)}
        loading={isLoading}
        disabled={isLoading}
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