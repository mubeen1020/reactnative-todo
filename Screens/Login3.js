import React from 'react';
import {Button, Image, Text, TextInput, TouchableOpacity, View} from 'react-native';

function Login3() {
  return (
    <View>
      <View>
        <Image  source={require('../Images/pin.png')} style={{width:'50%',height:'35%', marginTop: 10,resizeMode:'contain',marginLeft:85}}/>
      </View>

      <View style={{paddingVertical:30,paddingHorizontal:30}}>
        <TextInput 
         style={{
            borderWidth: 1,
            borderColor: 'white',
            borderRadius:25,paddingLeft:15
          }}
          placeholder="Email Address"
        />
        <View style={{paddingTop:15}}>
        <TextInput 
         style={{
            borderWidth: 1,
            borderColor: 'white',
            borderRadius:25,paddingLeft:15
          }}
          placeholder="Creat Passqword"
        />
      
        </View>
        <View style={{paddingTop:15}}>
        <TextInput 
         style={{
            borderWidth: 1,
            borderColor: 'white',
            borderRadius:25,paddingLeft:15
          }}
          placeholder="Age"
        />
      
        </View>

    </View>


    <View style={{padding:20}}>
        <TouchableOpacity style={{backgroundColor:'red', borderRadius:25,padding:15,
    }} >
            <Text style={{color:'white',textAlign:'center',fontWeight:'600'}}>Continue</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}

export default Login3;
