import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from './routes';
import profileIcon from '../assets/svg/profile.svg';
import homeIcon from '../assets/svg/home.svg';
import quotesIcon from '../assets/svg/quotes.svg';
import colors from '../theme/colors';
import {translate} from '../lang';

//Views
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import Quotes from '../screens/Quotes';

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
      <Tab.Screen
        name={Routes.QUOTES}
        component={Quotes}
        options={{
          tabBarIcon: quotesIcon,
          tabBarLabel: translate('Quotes'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
