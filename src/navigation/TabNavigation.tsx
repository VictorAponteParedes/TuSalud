import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './routes';
import HomeIcon from "../assets/svg/home.svg";
import CalendarIcon from "../assets/svg/calendar.svg";
import SettingIcon from "../assets/svg/settings.svg";
import { translate } from '../lang';
import SvgWrapper from "../components/SvgWrapper";
import colors from '../theme/colors';
// Views
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';
import Quotes from '../screens/Appointment';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary[400],
        tabBarInactiveTintColor: colors.grayDark,
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
      }}>
      <Tab.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <SvgWrapper color={color} size={size}>
              <HomeIcon />
            </SvgWrapper>
          ),
          tabBarLabel: translate('Home'),
        }}
      />
      <Tab.Screen
        name={Routes.QUOTES}
        component={Quotes}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <SvgWrapper color={color} size={size}>
              <CalendarIcon />
            </SvgWrapper>
          ),
          tabBarLabel: translate('Quotes'),
        }}
      />

      <Tab.Screen
        name={Routes.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <SvgWrapper color={color} size={size}>
              <SettingIcon />
            </SvgWrapper>
          ),
          tabBarLabel: translate('Settings'),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;