import _interopRequireDefault from '@babel/runtime/helpers/interopRequireDefault';
import React from 'react';
// import App from './App';
import {Image, StyleSheet, Text ,Linking, SafeAreaView ,View, TextInput , TouchableOpacity,} from 'react-native';

 
// import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { black, lightBlue200 } from 'react-native-paper/lib/typescript/styles/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.text}>appName</Text>
     
      
    
      </View>
      <View>
<Image style={styles.logo} source={require('./logo.jpeg')} />
      </View>
       
      <Text style={styles.inputdom} > Name:</Text>
      <TextInput placeholder='Enter your Email ID' style={styles.input}></TextInput>
      
      <Text style={styles.inputdom} >Email:</Text>
      <TextInput placeholder='Enter your Email ID' style={styles.input}>

    
      </TextInput>
      <Text style={styles.inputdom} >Contact Number:(optional)</Text>
      <TextInput placeholder='Enter your Email ID' style={styles.input}>

    
      </TextInput>
      <Text style={styles.inputdom} >Password:</Text>
      <TextInput placeholder='Enter Your Password' style={styles.input} 
                 >
                     </TextInput>
      <Text style={styles.inputdom} >Confirm Password:</Text>
      <TextInput placeholder='Confirm Your Password' style={styles.input} 
                 >

</TextInput>
<TouchableOpacity>
  <Text style={styles.loginbtn}>Sign Up</Text>
</TouchableOpacity>
<Text style={styles.inputdom }>
Already Have account ? { ' '}
<Text style={styles.inputdoml}
      onPress={() => Linking.openURL('http://devarun.site')}>
Sign In 
</Text>
      </Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  loginbtn:{
    alignSelf:'center',
padding:20,
    backgroundColor:'lightgreen',
    
    marginTop:10,
    borderRadius:10,
      justifyContent:'center',
    alignItems:'center',
    fontWeight:'bold',
    borderWidth:1,
    overflow:'hidden'

  },
  inputdom:{
    fontSize:20,
    padding:10,
  },
  inputdoml:{
    fontSize:17,
    color:'lightgreen',
    fontWeight:'bold',
  },

  input:{
    borderColor:'black',
    borderStyle:'solid',
    borderWidth:1.5,
    borderRadius:5,
    padding:10,
    marginLeft:10,
    marginRight:10,
    color:'black',
  
  },
  text: {
    fontSize: 25,
    marginTop:10,
    fontWeight: 'bold',
    // alignContent:'center'
    justifyContent:'center',
    alignSelf:'center',
  },
  logo:{
justifyContent:'center',
alignSelf:'center',
height:220,
maxWidth:500,
padding:60,
  }
});

export default App;