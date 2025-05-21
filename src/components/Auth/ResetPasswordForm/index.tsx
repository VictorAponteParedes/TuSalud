// src/screens/ForgotPasswordScreen.tsx
import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { translate } from '../../../lang';
import styles from './styles';
import colors from '../../../theme/colors';
import Toast from 'react-native-toast-message';
import Routes from '../../../navigation/routes';
import AuthServices from '../../../services/auth';
import { ResetPassword } from '../../../types/auth';



const ResetPasswordForm = () => {
    const navigation = useNavigation();
    const { resetPasswordUser } = new AuthServices()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPassword>();

    const onSubmit = async (data: ResetPassword) => {
        try {
            await resetPasswordUser(data)
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

            navigation.navigate(Routes.LOGIN);
        } catch (error) {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: translate('forgotPassword.errorTitle'),
                text2: translate('forgotPassword.errorMessage'),
                visibilityTime: 3000,
                autoHide: true,
                topOffset: 30,
                text1Style: { color: colors.black },
                text2Style: { color: colors.black },
            });
        }
    };

    return (
        <View style={styles.form}>
            <Input
                label={translate('codeVerification')}
                placeholder={translate('inputCode')}
                control={control}
                name="code"
                autoCapitalize="none"
                error={errors.token?.message}
            />
            <Input
                label={translate('reestablecerPassword')}
                placeholder="Ingrese su nueva contraseña"
                control={control}
                name="newPassword"
                autoCapitalize="none"
                error={errors.newPassword?.message}
            />

            <Button
                title={translate('reestablecerPassword')}
                onPress={handleSubmit(onSubmit)}
            />
        </View>
    );
};

export default ResetPasswordForm;