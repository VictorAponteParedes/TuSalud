import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import CustomHeader from '../../components/customHeader';
import { translate } from '../../lang';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import styles from './styles';
import CardInformacionPersonal from "../../components/CardInformacionPersonal/personalInfo";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();
  return (
    <>
      <CustomHeader
        titleBack={translate('backToLogin')}
        onBackPress={navigation.goBack}
        iconBack={true}
      />
      <Text>Profile Screen</Text>

      <View>
        <CardInformacionPersonal
          email="juan.perez@example.com"
          telefono="+593 123 456 789"
          grupoSanguineo="O+"
          fechaNacimiento="15/08/1990"
          seguroMedico="SaludPlus"
        />
      </View>

      <TouchableOpacity onPress={logout}>
        <Text style={styles.logoutText}>{translate('logout')}</Text>
      </TouchableOpacity>
    </>
  );
};
export default ProfileScreen;