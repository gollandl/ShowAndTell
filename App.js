import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Platform,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import OptionsScreen from './src/Components/OptionsScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Button
          onPress={() => navigate('Options')}
          title="Enter"
        />
      </View>
    );
  }
}

const ReactNavApp = StackNavigator({
    Home: { screen: HomeScreen },
    Options: { screen: OptionsScreen },
});

AppRegistry.registerComponent('ReactNavApp', () => ReactNavApp);
