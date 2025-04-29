import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import CustomHeader from '../../components/customHeader';
import {translate} from '../../lang';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../context/AuthContext';
import styles from './styles';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const {logout} = useAuth();
  return (
    <>
      <CustomHeader
        titleBack={translate('backToLogin')}
        onBackPress={navigation.goBack}
        iconBack={true}
      />
      <Text>Profile Screen</Text>

      <TouchableOpacity onPress={logout}>
        <Text style={styles.logoutText}>{translate('logout')}</Text>
      </TouchableOpacity>
    </>
  );
};
export default ProfileScreen;