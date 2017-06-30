import React, { Component } from 'react';
import { TabNavigator, TabView } from 'react-navigation'
//import Icon from "react-native-vector-icons/FontAwesome";
import stackNav from './stacknav';

const tabNav = TabNavigator({
    TabItem1: {
        screen: stackNav,
        navigationOptions: {
            tabBarLabel: "Tab 1",
        },
    }
}, {
    tabBarOptions: {
      activeTintColor: '#222',
      showIcon: true,
      showLabel: true,
      labelStyle: {
      fontSize: 18,
      },
    },
    tabBarPosition: 'bottom',
  });




export default tabNav;
