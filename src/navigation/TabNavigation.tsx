
import React from 'react';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './routes';

const Tab = createBottomTabNavigator();

const  TabNavigator =() =>{
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={Routes.HOME} component={HomeScreen} />
      <Tab.Screen name={Routes.PROFILE} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;