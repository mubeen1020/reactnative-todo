import React from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';

function Login5() {
  return (
    <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
      <View
        style={{
          backgroundColor: 'blue',
          height: 170,
          width: 200,
          borderBottomRightRadius: 170,
          borderTopRightRadius: 150,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: '600',
            textAlign: 'center',
            fontSize: 30,
            marginTop: 50,
          }}>
          Login
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#f3f6f4',
          width: '100%',
          height: '50%',
          marginTop: 80,
          borderTopRightRadius: 200,
          borderTopLeftRadius: 200,
        }}>
        <View
          style={{
            backgroundColor: '#351c75',
            width: '100%',
            height: '1000%',
            marginTop: 80,
            borderTopRightRadius: 200,
            borderTopLeftRadius: 200,
          }}>
          <View style={{marginTop: 100,width:'80%',marginLeft:38}}>
            <TextInput
              style={{
                borderWidth: 1,
                borderColor: 'white',
              }}
              placeholder="Email Address"
            />
            <View style={{paddingVertical: 30}}>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                }}
                placeholder="Password"
              />
            </View>
            <View>
        <TouchableOpacity
          style={{backgroundColor: '#222', borderRadius: 25, padding: 15}}>
          <Text
            style={{color: 'white', textAlign: 'center', fontWeight: '600'}}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',paddingHorizontal:100}}>
        <Text style={{textAlign:'center',color:'white'}}>Dont have an account</Text>
        <Text style={{textAlign:'center',textDecorationLine:'underline',color:'white',paddingLeft:5}}>Signin</Text>
    </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login5;
