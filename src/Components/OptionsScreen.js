import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Platform,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import ChatScreen from './ChatScreen';
import ShareScreen from './ShareScreen';


const OptionsScreen = TabNavigator({
  Elec: { screen: ChatScreen },
  Gas: { screen: ShareScreen },
}, {
    tabBarOptions: {
      activeTintColor: (Platform.OS === 'ios') ? '#007AFF' : '#00bcd4',
      activeBackgroundColor: (Platform.OS === 'ios') ? 'blue' : 'blue',
      inactiveTintColor: (Platform.OS === 'ios') ? '#616161' : 'white',
      inactiveBackgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'white',
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: 10,
      },
    },
    tabBarPosition: 'top',
    swipeEnabled: true,
    initialRouteName: 'Gas',
  });

  export default OptionsScreen;
