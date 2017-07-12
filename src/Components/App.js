import React from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import StackNav from './StackNav';
import ExpoScreen from './ExpoScreen';
import FBScreen from './FBScreen';
import TabNav from './TabNav';

const ReactNavApp = DrawerNavigator({
    DrawerItem1: {
        screen: StackNav,
        navigationOptions: {
            drawerLabel: 'Home',
        },
    },
});

AppRegistry.registerComponent('ReactNavApp', () => ReactNavApp);
