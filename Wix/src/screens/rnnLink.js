import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class rnnLink extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Image source={require('../../images/github.png')} style={styles.rnnImage} />
        <Text>github.com/wix/react-native-navigation</Text>
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
  rnnImage: {
    width: 100,
    height: 100
  }
});
