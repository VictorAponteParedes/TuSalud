import React from "react";
import { View, Text } from "react-native";
import CustomHeader from '../../components/customHeader';
import {translate} from '../../lang';
import {useNavigation} from '@react-navigation/native';
const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <CustomHeader
        titleBack={translate('backToLogin')}
        onBackPress={navigation.goBack}
      />
      <Text>Profile Screen</Text>
    </>
  );
};
export default ProfileScreen;