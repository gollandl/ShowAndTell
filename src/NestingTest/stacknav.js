
import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity } from 'react-native';
import { StackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation'
import IOSIcon from "react-native-vector-icons/Ionicons";
import DetailScreen from './detail';
import MainScreen from './main';


const DrawerButton = ({ navigate }) => (
  <Button title='left button' onPress={() => navigate('DrawerOpen')} />
);

/*DrawerButton.propTypes = {
  navigation: React.PropTypes.object.isRequired,
};*/


const stackNav = StackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: ({ navigation }) => ({
          headerLeft : <DrawerButton navigate={navigation.navigate} />,
        }),
    },
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            title: 'Detail',
            headerLeft: null,
        }
    }
});

export default stackNav;
