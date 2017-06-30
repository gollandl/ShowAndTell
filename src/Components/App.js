import React from 'react';
import { AppRegistry } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import StackNav from './StackNav';
import ElecScreen from './ElecScreen';
import GasScreen from './GasScreen';
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
