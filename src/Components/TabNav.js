import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';

import ElecScreen from './ElecScreen';
import GasScreen from './GasScreen';

const TabScreen = TabNavigator({
  TabItem1: {
      screen: GasScreen,
      navigationOptions: {
          drawerLabel: 'Gas',
          tabBarLabel: "Gas",
      }
  },
  TabItem2: {
      screen: ElecScreen,
      navigationOptions: {
          drawerLabel: 'Elec',
          tabBarLabel: "Elec",
      }
  }
  }, {
      tabBarOptions: {
        activeTintColor: (Platform.OS === 'ios') ? 'white' : 'white',
        activeBackgroundColor: (Platform.OS === 'ios') ? '#40A8F5' : '#40A8F5',
        inactiveTintColor: (Platform.OS === 'ios') ? '#616161' : '#40A8F5',
        inactiveBackgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'white',
        showIcon: true,
        showLabel: true,
        labelStyle: {
        fontSize: 18,
        },
      },
      tabBarPosition: 'top',
      swipeEnabled: true,
      //initialRouteName: 'TabItem1',
});

export default TabScreen;
