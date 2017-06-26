import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Platform,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class ShareScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Share',
    title: 'Share with Lucy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
          <Text>Share</Text>
        </View>
    );
  }
}

export default ShareScreen;
