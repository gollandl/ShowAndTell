import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Icons,
  Image,

} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class TopupScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>

          <Text style={styles.text}> Smart Card number:12345678912345678 </Text>

          <Text style={styles.list}> Recent transactions</Text>
          <Text style={styles.subheading}>This years amounts:</Text>
          <View syle={styles.transactions}>
            <Text style={styles.transactions}>19 Jan    2017                    £22.00</Text>
            <Text style={styles.transactions}>30 Feb   2017                    £19.50</Text>
            <Text style={styles.transactions}>15 Mrch 2017                    £17.25</Text>
            <Text style={styles.transactions}>03 Apl   2017                    £25.99</Text>
            <Text style={styles.transactions}>28 Apl   2017                    £17.56</Text>
          </View>



        <TouchableHighlight onPress={() => navigate('TabBar')} style={styles.touch}>
          <Text style={styles.buttonText}>Make new Top up</Text>
        </TouchableHighlight>


        <TouchableHighlight onPress={() => navigate('Home')} style={styles.touch}>
                  <Text style={styles.buttonText}>Log out</Text>
                </TouchableHighlight>

        </View>
    );
  }
}

const styles = StyleSheet.create({

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

balance:{
//flex:1,
flexDirection:'row',


},

cost:{
  marginTop:20,
marginLeft:50,
fontSize:25,
color:'navy'

},

bold:{
marginTop:30,
marginRight:100,
marginLeft:20,
fontSize:20,
color:'black',
},

topup:{
  flex:1,
  alignSelf:'flex-start',
  alignItems:'flex-start',

},

indent:{
marginLeft:20,

},

pound:{
  fontSize:70,
  color:'navy',
  marginLeft:20,
  flexBasis:100,

},

amount:{
  fontSize:70,
  color:'black',

},

poundPicker:{
flex:1,
flexDirection:'row',
flexWrap:'wrap',
alignContent:'flex-start',
},

price:{
  color:'navy',
  fontSize:25,
  marginLeft:80,
},
topup2:{
  color:'lime',
  fontSize:40,
},

list:{
  marginLeft:30,
  fontSize:20,
  color:'navy',

},

transactions:{

  marginLeft:20,
  marginBottom:10,

},
subheading:{
  fontSize:15,
  marginBottom:10,
},
pic: {
  flexGrow:1,
  width:350,
  height:270,
  alignSelf:'center',
  flexBasis:'27%',
  marginBottom:50,
},

touch:{
  height:30,
  width:350,
  backgroundColor:'#7CE157',
  justifyContent:'center',
  alignSelf:'center',
  marginTop:20,
},
buttonText:{
  flex:1,
  color:'white',
  fontSize:15,
  fontWeight:"400",
  alignSelf:'center',
},

})

export default TopupScreen;
