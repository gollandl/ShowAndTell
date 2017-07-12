import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class rnnScreen extends Component {

  render() {
    return(
      <View style={styles.container}>
      <Image
        source={require('../../images/ReactNativeNavigationLogo.png')}
        style={styles.rnnImage}
      />
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
    width: 180,
    height: 180
  }
});
