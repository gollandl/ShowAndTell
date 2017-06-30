import React from 'react';
import { AppRegistry, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import TabScreen from './TabNav';
import TopUpScreen from './TopupScreen';
import ThankScreen from './ThankScreen';

const DrawerButton = ({ navigate }) => (
  <Button title='Menu' onPress={() => navigate('DrawerOpen')} />
);

const StackNav = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerLeft: null,
        }
    },
    TabBar: { screen: TabScreen,
      navigationOptions: ({ navigation }) => ({
      headerLeft : <DrawerButton navigate={navigation.navigate} />,
      headertitle: 'Top Up',
    }),
    },
    Topup: { screen: TopUpScreen },
    Thank: { screen: ThankScreen },
});

export default StackNav;
