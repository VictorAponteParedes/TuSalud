import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { translate } from '../../../lang';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../navigation/routes';
import styles from './styles';
import { useForm } from 'react-hook-form';
import { LoginFormData } from '../../../types/auth';
import { useAuth } from '../../../context/AuthContext';
import Toast from 'react-native-toast-message';
import colors from '../../../theme/colors';
import { Email, Lock } from '../../../helpers';
import SecureInput from '../../ui/SecureInput';
import BiometricModal from '../../BiometricModal';

const LoginForm = () => {
  const navigation = useNavigation();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormData>();

  const email = watch('email');

  useEffect(() => {
    console.log('LoginForm useEffect - Email actual:', email);
    if (email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      console.log('Email válido detectado, abriendo BiometricModal');
      setIsModalVisible(true);
    } else {
      console.log('Email inválido o vacío, cerrando BiometricModal');
      setIsModalVisible(false);
    }
  }, [email]);

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);
      Toast.show({
        type: 'success',
        position: 'top',
        text1: translate('successRegister.title'),
        text2: translate('successRegister.successMessage'),
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 30,
        text1Style: { color: colors.black },
        text2Style: { color: colors.black },
      });
    } catch (error: any) {
      console.log('Error en login:', error.message);
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
    <>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
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
                message: translate('invalidEmailFormat'),
              },
            }}
            error={errors.email?.message}
            iconName={<Email />}
          />

          <SecureInput
            label={translate('Password')}
            placeholder={translate('InsertPassword')}
            secureTextEntry={true}
            control={control}
            name="password"
            rules={{
              required: translate('passwordRequerd'),
              minLength: {
                value: 6,
                message: translate('passwordMinLength'),
              },
            }}
            error={errors.password?.message}
            iconName={<Lock />}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.FORGOT_PASSWORD)}
            style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>
              {translate('ForgotPassword')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.REGISTER)}
            style={styles.registerButton}>
            <Text style={styles.registerText}>
              {translate('DontHaveAccount')}
            </Text>
          </TouchableOpacity>

          <Button
            title={translate('SignIn')}
            onPress={handleSubmit(onSubmit)}
            loading={isLoading}
            disabled={isLoading}
          />
        </View>
      </ScrollView>

      <BiometricModal
        isVisible={isModalVisible}
        onClose={() => {
          console.log('Cerrando BiometricModal');
          setIsModalVisible(false);
        }}
        email={email}
      />
    </>
  );
};

export default LoginForm;