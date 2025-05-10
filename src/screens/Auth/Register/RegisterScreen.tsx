import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import RegisterForm from '../../../components/Auth/Register/RegisterForm';
import styles from './styles';
import CustomHeader from '../../../components/customHeader';
import { translate } from '../../../lang';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomHeader
        onBackPress={navigation.goBack}
        iconBack={true}
        titleBack={translate('backToLogin')}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.modal}>
            <RegisterForm />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default RegisterScreen;