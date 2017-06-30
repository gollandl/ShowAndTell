import React from 'react';
import {
  Text,
  View,
  Button,
  Platform,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  Icons,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class ElecScreen extends React.Component {
  static navigationOptions = {
    title: 'Electricity',
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>

          <TouchableHighlight style={styles.grey2}>
            <Text style={styles.text}> Smart Card number:12345678912345678 </Text>
        </TouchableHighlight>
          <View style={styles.balance}>
          <Text style={styles.bold}>Balance</Text>
          <Text style={styles.cost}>£36.00</Text>
        </View>

        <Text style={styles.indent}>On 12 Dec 2017 at 21:08 </Text>

        <TouchableHighlight onPress={() => navigate('Topup')} style={styles.touch2}>
            <Text style={styles.buttonText2}>Top up History</Text>
          </TouchableHighlight>

        <Text style={styles.bold}>Choose amount</Text>
        <Text style={styles.indent}>Top up at least £5- no more than£99</Text>

        <View style={styles.balance}>
        <TouchableHighlight style={styles.grey}>
        <Text style={styles.pound}>£</Text>
      </TouchableHighlight>
        <Text style={styles.amount}>05.00</Text>

      </View>

      <View style={styles.balance}>
      <Text style={styles.indent}> You last topped up: </Text>
      <Text style={styles.price}> £50 </Text>
      </View>
      <Text style={styles.indent}> On 5 November 2017 at 16:40pm </Text>


        <TouchableHighlight   onPress={() => navigate('Thank')} style={styles.touch}>
                <Text style={styles.buttonText}>Top up</Text>
              </TouchableHighlight>

      <Button style={styles.topup2}
        onPress={() => navigate('Home')}
        title="Log Out"/>

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
  color:'#40A8F5',
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


touch:{
  height:50,
  width:350,
  marginLeft:10,
  backgroundColor:'#7CE157',
  justifyContent:'center',
  marginTop:20,
},
buttonText:{
  flex:1,
  color:'white',
  fontSize:30,
  fontWeight:"400",
  alignSelf:'center',
},
touch2:{
  height:30,
  width:200,
  backgroundColor:'#E0E2DF',
  justifyContent:'center',
  alignSelf:'flex-start',
  marginTop:20,
},
buttonText2:{
  flex:1,
  color:'#40A8F5',
  fontSize:18,
  fontWeight:"600",
  alignSelf:'center',
},
grey:{
  height:60 ,
  width:70 ,
  backgroundColor:'#E0E2DF',
},
grey2:{
  height:30,
  width:370,
  backgroundColor:'#E0E2DF',

},
})


export default ElecScreen;
