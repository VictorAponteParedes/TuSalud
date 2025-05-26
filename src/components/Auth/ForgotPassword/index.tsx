// src/screens/ForgotPasswordScreen.tsx
import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-gesture-handler';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { translate } from '../../../lang';
import styles from './styles';
import colors from '../../../theme/colors';
import Toast from 'react-native-toast-message';
import Routes from '../../../navigation/routes';
import AuthServices from '../../../services/auth';
import { ForgotPasswordData } from '../../../types/auth';

const ForgotPasswordForm = () => {
  const navigation = useNavigation();
  const { forgotPasswordUser } = new AuthServices();
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar el loader

  const {
    control,
    handleSubmit,
    formState: { errors, isValid }, // Agregamos isValid para mejor UX
  } = useForm<ForgotPasswordData>({
    mode: 'onChange', // Validación en tiempo real
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    if (isLoading) return;

    console.log('Email enviado a:', data.email);
    setIsLoading(true);

    try {
      await forgotPasswordUser(data.email);
      navigation.navigate(Routes.RESET_PASSWORD);
      Toast.show({
        type: 'success',
        position: 'top',
        text1: translate('forgotPassword.successTitle'),
        text2: translate('forgotPassword.successMessage'),
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
        text1Style: { color: colors.black },
        text2Style: { color: colors.black },
      });
    } catch (error) {
      console.error('Error al enviar código:', error);
      Toast.show({
        type: 'error',
        position: 'top',
        text1: translate('forgotPassword.errorTitle'),
        text2: error.message || translate('forgotPassword.errorMessage'),
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
        label={translate('personalInfo.email')}
        placeholder={translate('email')}
        control={control}
        name="email"
        autoCapitalize="none"
        keyboardType="email-address"
        rules={{
          required: translate('usernameRequerd'),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: translate('invalidEmailFormat'),
          },
        }}
        error={errors.email?.message}
      />

      <Button
        title={translate('sendResetLink')}
        onPress={handleSubmit(onSubmit)}
        loading={isLoading}
        disabled={!isValid || isLoading}
      />
    </View>
  );
};

export default ForgotPasswordForm;