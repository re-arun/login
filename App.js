import _interopRequireDefault from '@babel/runtime/helpers/interopRequireDefault';
import React from 'react';

// import App from './App';
import {Image, StyleSheet, Text ,Linking, SafeAreaView ,View, TextInput ,Button, TouchableOpacity, ScrollView} from 'react-native';
import { CommandName } from 'react-native-navigation';
import { Title } from 'react-native-paper';

 
// import { createStackNavigator, createAppContainer } from 'react-navigation';  
import { black, lightBlue200 } from 'react-native-paper/lib/typescript/styles/colors';

const App = () => {
  return (
    <SafeAreaView >
      <View>
      <ScrollView >
    <View>
      <Text style={styles.text}>Arun Singh</Text>
     
      
    
    </View>
      <View>
<Image style={styles.logo} source={require('./logo.jpeg')} />
      </View>
       
      <Text style={styles.inputdom} > Name:</Text>
      <TextInput placeholder='Enter your Full Name' style={styles.input} autoCorrect={false}></TextInput>
      
      <Text style={styles.inputdom} >Email:</Text>
      <TextInput placeholder='demo@xyz.com' style={styles.input} autoComplete={'email'} keyboardType={'email-address'}  >

      
      </TextInput>
     
      <Text style={styles.inputdom} >Contact Number:(optional)</Text>
      <TextInput placeholder='Enter your Contact Number' style={styles.input} keyboardType={'number-pad'} maxLength={10} keyboardAppearance={'dark'}

     
>

  

    
      </TextInput>
      <Text style={styles.inputdom} >Password:</Text>
      <TextInput placeholder='Enter Your Password' style={styles.input} secureTextEntry={true} 
                 >
                     </TextInput>
      <Text style={styles.inputdom} >Confirm Password:</Text>
      <TextInput placeholder='Confirm Your Password' style={styles.input} secureTextEntry={true} 
                 >

</TextInput>
<View style={styles.loginbtn}>
<Button 

onPress={() => alert('sign up complete please login now')}
title='Sign Up'
color={'black'}
style={styles.utton}
/>
</View>
<Text style={styles.inputdom }>
Already Have account ? { ' '}
<Text style={styles.inputdoml}
      onPress={() => Linking.openURL('http://devarun.site')}>
Sign In 
</Text>
      </Text>
     

</ScrollView>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  },
  loginbtn:{
    alignSelf:'center',
    width:100,
    backgroundColor:'#2494B8',
    
    color:'black',
    marginTop:20,
    borderRadius:10,
    //   justifyContent:'center',
    // alignItems:'center',
    fontWeight:'bold',
    borderWidth:1,
    // overflow:'hidden'
    

  },
  inputdom:{
    fontSize:20,
    padding:10,
  },
  inputdoml:{
    fontSize:17,
    color:'green',
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
backgroundColor:'red'
  },
utton:{
backgroundColor:'black',
},
});

export default App;