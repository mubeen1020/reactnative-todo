import React from 'react';
import {Button, Image,  Text,  TextInput,  View} from 'react-native';

function Login2() {
  return (
      
      <View>
      <View style={{backgroundColor:'blue',height:'40%',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
      <Text style={{color:'white',fontWeight:'800',fontSize:60,textAlign:'center',marginTop:69}}>Facebook</Text>
      </View>
      <View style={{paddingVertical:30,paddingHorizontal:10}}>
        <TextInput 
         style={{
            borderWidth: 1,
            borderColor: 'white',
          }}
          placeholder="Email Address"
        />
        <View style={{paddingVertical:30}}>
        <TextInput 
         style={{
            borderWidth: 1,
            borderColor: 'white',
          }}
          placeholder="Password"
        />
        </View>

    </View>
    <View style={{padding:20}}>
        <Button title='Login' color='blue' />
    </View>
    <View style={{flexDirection:'row',paddingHorizontal:100}}>
        <Text style={{textAlign:'center'}}>Dont have an account</Text>
        <Text style={{textAlign:'center',textDecorationLine:'underline'}}>Signin</Text>
    </View>
      </View>
  );
}

export default Login2;
