import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from '../../context/AuthContext';
import CustomHeader from '../../components/customHeader';
import {profileImage} from '../../assets';

const HomeScreen = () => {
  const {logout} = useAuth();
  return (
    <>
      <CustomHeader imageProfile={profileImage} title="Home" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'red'}}>Home Screen</Text>
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default HomeScreen;