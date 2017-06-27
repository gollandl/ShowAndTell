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

} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class ChatScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Elec',
    title: 'Electricity',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
        <View>

          <Text style={styles.text}> Smart Card number:12345678912345678 </Text>
          <View style={styles.balance}>
          <Text style={styles.bold}>Balance</Text>
          <Text style={styles.cost}>£36.00</Text>
        </View>

        <Text style={styles.indent}>On 12 Dec 2017 at 21:08 </Text>
        <Button style={styles.topup}
          onPress={() => navigate('Options')}
          title="Top up History"
        />

        <Text style={styles.bold}>Choose amount</Text>
        <Text style={styles.indent}>Top up at least £5- no more than£99</Text>

        <View style={styles.balance}>
        <Text style={styles.pound}>£</Text>
        <Text style={styles.amount}>05.00</Text>
      </View>

      <View style={styles.balance}>
      <Text style={styles.indent}> You last topped up: </Text>
      <Text style={styles.price}> £50 </Text>
      </View>
      <Text style={styles.indent}> On 5 November 2017 at 16:40pm </Text>

      <Button style={styles.topup2}
        onPress={() => navigate('Options')}
        title="Top up"

      />


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

})







export default ChatScreen;
