import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

function Login4() {
  return (
    <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      <View>
        <Text
          style={{
            color: 'black',
            fontWeight: '800',
            fontSize: 40,
            textAlign: 'center',
            marginTop: 10,
          }}>
          Login
        </Text>
      </View>
      <View style={{paddingVertical: 30, paddingHorizontal: 30,marginTop:50}}>
        <TextInput
          style={{
            color:'black',
            borderBottomWidth: 1,
            borderColor: 'black',
            paddingLeft: 15,
          }}
          placeholder="Email Address"
          placeholderTextColor="black" 
        />
        <View style={{paddingTop: 15}}>
          <TextInput
            style={{
                color:'black',
                borderBottomWidth: 1,
              borderColor: 'black',
              paddingLeft: 15,
            }}
            placeholder="Creat Password"
            placeholderTextColor="black" 
          />
        </View>
        <View style={{paddingTop: 15}}>
          <TextInput
            style={{
                color:'black',
                borderBottomWidth: 1,
              borderColor: 'black',
              paddingLeft: 15,
            }}
            placeholder="Age"
            placeholderTextColor="black" 
          />
        </View>
      </View>

      <View style={{padding: 20}}>
        <TouchableOpacity
          style={{backgroundColor: 'red', borderRadius: 25, padding: 15}}>
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: '600'}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',paddingHorizontal:100}}>
        <Text style={{textAlign:'center',color:'black'}}>Dont have an account</Text>
        <Text style={{textAlign:'center',textDecorationLine:'underline',color:'black',paddingLeft:5}}>Signin</Text>
    </View>
    </View>
  );
}

export default Login4;
