import React from 'react';
import {
  Text,
  View,
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class ExpoScreen extends React.Component {
  static navigationOptions = {
    title: 'Expo',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>

          <TouchableOpacity onPress={() => navigate('Home')} >
              <Image style={styles.pic} source={require('../../images/expo-logo.png')}/>
          </TouchableOpacity>

        </View>
    );
  }
}

const styles = StyleSheet.create({
pic:{
  alignSelf:'center',
justifyContent:'center',
width: 200,
height:200,
marginTop:100,
flexBasis:'40%',
},

})


export default ExpoScreen;
