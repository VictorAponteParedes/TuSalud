import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useAuth } from '../../context/AuthContext';

const HomeScreen = () => {
  const { logout } = useAuth();
  return (
    <View>
      <Text>Home Screen</Text>

      <TouchableOpacity onPress={logout}>
        <Text style={{ color: "black" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};
export default HomeScreen;