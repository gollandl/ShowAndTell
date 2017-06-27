import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Platform,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import OptionsScreen from './src/Components/OptionsScreen';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'British Gas',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image style={styles.pic} source={require('./images/bg.png')}/>
        <Text style={styles.text}>Please login</Text>

        <TextInput style={styles.textinput} placeholder={'Username'} placeholderTextColor={"rgba(198,198,204,1)"}/>
        <TextInput style={styles.textinput} placeholder={'Password'} placeholderTextColor={"rgba(198,198,204,1)"}secureTextEntry ref={(input) => this.passwordInput = input}/>

        <Button
          onPress={() => navigate('Options')}
          title="Login"
        />
      </View>
    );
  }
}

const ReactNavApp = StackNavigator({
    Home: { screen: HomeScreen },
    Options: { screen: OptionsScreen },
    
});


const styles = StyleSheet.create({
  pic: {
    flexGrow:1,
    width:350,
    height:270,
    alignSelf:'center',
    flexBasis:'27%',
    marginBottom:50,
  },
  textinput: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 65,
      height: 20,
      width: 250,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.5)"
    },

    text: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
container:{
  alignItems:'center',
  justifyContent:'center',
  marginTop:100,
},
})

AppRegistry.registerComponent('ReactNavApp', () => ReactNavApp);
