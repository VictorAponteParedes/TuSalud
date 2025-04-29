import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SvgXml} from 'react-native-svg';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import Routes from './routes';
import profileIcon from '../assets/svg/profile.svg';
import homeIcon from '../assets/svg/home.svg';
import colors from '../theme/colors';
import {translate} from '../lang';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary[400],
        tabBarInactiveTintColor: colors.grayDark,
      }}>
      <Tab.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: homeIcon,
          tabBarLabel: translate('Home'),
        }}
      />
      <Tab.Screen
        name={Routes.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: profileIcon,
          tabBarLabel: translate('Profile'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
