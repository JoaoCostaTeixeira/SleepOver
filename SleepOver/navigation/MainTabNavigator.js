import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Login from '../screens/Login';
import MessegeBox from '../screens/MessegeBox';
import Reservas from '../screens/Reservas';

const HomeStack = createStackNavigator({
  Home: Home,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Messege : MessegeBox,
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-chatboxes'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-settings'}
    />
  ),
};

const ReservaStack = createStackNavigator({
  Settings: Reservas,
});

ReservaStack.navigationOptions = {
  tabBarLabel: 'Reservas',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-settings'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  ReservaStack,
  SettingsStack,

});
