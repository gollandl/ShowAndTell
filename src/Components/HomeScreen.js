import React from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
title:'React-Navigation'}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <TouchableOpacity onPress={() => navigate('TabBar')} >
          <Image style={styles.pic} source={require('../../images/React-icon.png')}/>

        </TouchableOpacity>

        <Text style={styles.text}>React-Navigation</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pic:{
    alignSelf:'center',
    justifyContent:'center',
    width: 250,
    height:250,
    marginTop:100,
},
text:{
  justifyContent:'center',
  alignSelf:'center',
  fontSize:20,
}
})

export default HomeScreen;
