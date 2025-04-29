// src/navigation/MainNavigator.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import Routes from './routes';
import TabNavigator from './TabNavigation';

export type MainStackParamList = {
  Home: undefined;
  Profile: undefined;
  TabNavigator: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={Routes.TAB_NAVIGATOR}
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
