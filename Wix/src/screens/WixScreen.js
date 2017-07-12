import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image, TouchableHighlight } from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class WixScreen extends Component {


  toggleDrawer = () => {
    this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });
  };

  pushScreen = () => {
    this.props.navigator.push({
      screen: 'rnnScreen',
      title: 'React Native Navigation'
    });
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      this.toggleDrawer();
    }
  }

  render() {
    return(
      <View style={styles.container}>
          <TouchableHighlight onPress={this.pushScreen}>
            <Image
              source={require('../../images/WixLogo.jpg')}
              style={styles.wixImage}
            />
          </TouchableHighlight>
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
  wixImage: {
    width: 150,
    height: 150
  }
});
