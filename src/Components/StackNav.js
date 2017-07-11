import React from 'react';
import { AppRegistry, Button,TouchableOpacity,Image,StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import TabScreen from './TabNav';

const DrawerButton = ({ navigate }) => (
  <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
    <Image style={styles.icon} source={require('../../images/mu.png')}/>
  </TouchableOpacity>

);


const HomeButton = ({ navigate }) => (
  <Button title='Home' onPress={() => navigate('TabBar')} />
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

});

const styles = StyleSheet.create({

icon:{
  width:40,
  height:40,
},

})

export default StackNav;
