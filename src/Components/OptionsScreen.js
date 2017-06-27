import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Platform,
  Icon,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import ChatScreen from './ChatScreen';
import ShareScreen from './ShareScreen';
import TopupScreen from './TopupScreen';

const OptionsScreen = TabNavigator({
  Elec: { screen: ChatScreen },

  Gas: { screen: ShareScreen },


}, {
    tabBarOptions: {
      activeTintColor: (Platform.OS === 'ios') ? 'white' : 'white',
      activeBackgroundColor: (Platform.OS === 'ios') ? '#40A8F5' : '#40A8F5',
      inactiveTintColor: (Platform.OS === 'ios') ? '#616161' : 'white',
      inactiveBackgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'white',
      showIcon: true,
      showLabel: true,
      labelStyle: {
      fontSize: 18,
      },
    },
    tabBarPosition: 'top',
    swipeEnabled: true,
    initialRouteName: 'Gas',
  });

  export default OptionsScreen;
