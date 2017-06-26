import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Platform,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class ChatScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Chat',
    title: 'Chat with Lucy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>
          <Text>Chat</Text>
        </View>
    );
  }
}

export default ChatScreen;
