import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class Welcome extends Component {
  pushTabs = () => {
    this.props.navigator.push({
      screen: 'TabScreen',
      title: 'Tabs',
    });
  };

  render() {
    return(
      <View style={styles.container}>
        <Text>Login</Text>
          <Button title={'Click Here'} onPress={this.pushTabs}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Tab One',
      screen: 'ScreenOne',
      icon: require('../../img/list.png'),
      title: 'Screen One'
    },
    {
      label: 'Tab Two',
      screen: 'ScreenTwo',
      icon: require('../../img/swap.png'),
      title: 'Screen Two'
    }
  ]
});
