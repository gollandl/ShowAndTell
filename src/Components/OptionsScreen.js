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
  Chat: { screen: ChatScreen },
  Share: { screen: ShareScreen },
}, {
    tabBarOptions: {
      activeTintColor: (Platform.OS === 'ios') ? '#007AFF' : '#00bcd4',
      activeBackgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'white',
      inactiveTintColor: (Platform.OS === 'ios') ? '#616161' : 'white',
      inactiveBackgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'white',
      showIcon: true,
      showLabel: true,
      labelStyle: {
        fontSize: 10,
      },
    },
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    initialRouteName: 'Chat',
  });

  export default OptionsScreen;
