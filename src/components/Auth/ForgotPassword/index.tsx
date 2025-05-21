// src/screens/ForgotPasswordScreen.tsx
import React from 'react';
import { View } from 'react-native';
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
    const { forgotPasswordUser } = new AuthServices()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordData>();

    const onSubmit = async (data: ForgotPasswordData) => {
      console.log('Email enviado a:', data.email);
      try {
        await forgotPasswordUser(data.email);

        Toast.show({
          type: 'success',
          position: 'top',
          text1: translate('forgotPassword.successTitle'),
          text2: translate('forgotPassword.successMessage'),
          visibilityTime: 3000,
          autoHide: true,
          topOffset: 30,
          text1Style: {color: colors.black},
          text2Style: {color: colors.black},
        });

        navigation.navigate(Routes.RESET_PASSWORD);
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: translate('forgotPassword.errorTitle'),
          text2: translate('forgotPassword.errorMessage'),
          visibilityTime: 3000,
          autoHide: true,
          topOffset: 30,
          text1Style: {color: colors.black},
          text2Style: {color: colors.black},
        });
        navigation.navigate(Routes.RESET_PASSWORD);
      }
    };

    return (
        <View style={styles.form}>
            <Input
                label={translate('email')}
                placeholder={translate('email')}
                control={control}
                name="email"
                autoCapitalize="none"
                keyboardType="email-address"
                rules={{
                    required: translate('usernameRequerd'),
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: translate('invalidEmailFormat')
                    }
                }}
                error={errors.email?.message}
            />

            <Button
                title={translate('sendResetLink')}
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    );
};

export default ForgotPasswordForm;