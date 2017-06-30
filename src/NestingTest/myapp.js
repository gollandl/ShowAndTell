import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { DrawerNavigator} from 'react-navigation';
//import Icon from "react-native-vector-icons/FontAwesome";
import tabNav from './tabnav';

const ReactNavApp = DrawerNavigator({
    DrawerItem1: {
        screen: tabNav,
        navigationOptions: {
            drawerLabel: 'Drawer 1',
        },
    },
});

AppRegistry.registerComponent('ReactNavApp', () => ReactNavApp);
