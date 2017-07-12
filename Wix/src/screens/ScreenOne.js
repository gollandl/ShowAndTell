import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class ScreenOne extends Component {

  pushScreen = () => {
    this.props.navigator.push({
      screen: 'Push',
      title: 'Pushed Screen',
    });
  };

  render() {
    return(
      <View style={styles.container}>
        <Text>Screen One</Text>
          <Button title={'Click Here'} onPress={this.pushScreen}/>
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
