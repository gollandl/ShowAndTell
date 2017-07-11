import React from 'react';
import {
  Text,
  View,
  Button,
  Platform,
  StyleSheet,
  Picker,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class GasScreen extends React.Component {
  static navigationOptions =  {
    title: 'Facebook',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

          <View>

      <TouchableOpacity onPress={() => navigate('Home')} >
        <Image style={styles.fb} source={require('../../images/fbl.png')}/>
      </TouchableOpacity>

          </View>
      );
    }
  }

  const styles = StyleSheet.create({
fb:{
  width:300,
height:200,
flexBasis:'20%',
justifyContent:'center',
alignItems:'center',
marginTop:180,
marginLeft:40,
},

  })

export default GasScreen;
