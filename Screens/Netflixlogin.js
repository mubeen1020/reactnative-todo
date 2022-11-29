import React from 'react'
import { Button, Image, Text, TextInput, View } from 'react-native'

function Netflixlogin() {
  return <View>
    <View style={{paddingTop:140}}>

    <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'}} style={{width:'100%',height:100,resizeMode:'contain'}} />
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
        <Button title='Login' color='red' />
    </View>
    <View style={{flexDirection:'row',paddingHorizontal:100}}>
        <Text style={{textAlign:'center'}}>Dont have an account</Text>
        <Text style={{textAlign:'center',textDecorationLine:'underline'}}>Signin</Text>
    </View>
  </View>
}

export default Netflixlogin
