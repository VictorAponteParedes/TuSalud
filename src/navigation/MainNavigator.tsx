// src/navigation/MainNavigator.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes';
import TabNavigator from './TabNavigation';
import ProfileScreen from '../screens/Profile';
import Notifications from '../screens/Notifications';

export type MainStackParamList = {
  Profile: undefined;
  Notifications: undefined;
  TabNavigator: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Routes.TAB_NAVIGATOR}
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.PROFILE}
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.NOTIFICATIONS}
        component={Notifications}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
