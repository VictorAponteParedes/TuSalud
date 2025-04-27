import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { translate } from '../../../lang';
import { useNavigation } from '@react-navigation/native';
import Routes from '../../../navigation/routes';

import styles from './styles';
import { Text } from 'react-native-gesture-handler';

const LoginForm = () => {
  const navigation = useNavigation();
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
