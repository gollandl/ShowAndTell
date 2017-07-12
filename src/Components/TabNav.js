import React from 'react';
import { Platform,StyleSheet,Image } from 'react-native';
import { TabNavigator, DrawerNavigator } from 'react-navigation';

import ExpoScreen from './ExpoScreen';
import FBScreen from './FBScreen';

const TabScreen = TabNavigator({
  TabItem1: {
      screen: FBScreen,
      navigationOptions: {

          tabBarIcon:({tintColor}) => (
      <Image
        source={require('../../images/f.png')}
        style={[styles.fb, {tintColor: tintColor}]}
      />
    )
      }
  },
  TabItem2: {
      screen: ExpoScreen,
      navigationOptions: {
          tabBarIcon:({tintColor}) => (
      <Image
        source={require('../../images/expo-logo.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
      }
  }
  }, {
      tabBarOptions: {
        activeTintColor: (Platform.OS === 'ios') ? 'white' : 'white',
        activeBackgroundColor: (Platform.OS === 'ios') ? '#40A8F5' : '#40A8F5',
        inactiveTintColor: (Platform.OS === 'ios') ? '#616161' : '#40A8F5',
        inactiveBackgroundColor: (Platform.OS === 'ios') ? 'transparent' : 'white',
        showIcon: true,
        showLabel: false,
        labelStyle: {
        fontSize: 18,
        },
      },
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      //initialRouteName: 'TabItem1',
});

const styles = StyleSheet.create({

icon:{
  width:26,
  height:26,
},
fb:{
  width:35,
  height:35,
},

})


export default TabScreen;
