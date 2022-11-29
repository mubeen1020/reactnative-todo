import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

function Todo() {
  const [list, setlist] = useState([]);
  const [txt, settxt] = useState('');
  // const [checked, setchecked] = useState(false);

  // const toggleclass = () => {
  //   setchecked(!checked);
  // };

  let add = e => {
    setlist([...list, txt]);
  };
  let del = id => {
    list.splice(id, 1);
    setlist([...list]);
  };
  let edit = id => {
    
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 26,
          textAlign: 'center',
          padding: 10,
          backgroundColor: '#222',
        }}>
        My TodoApp
      </Text>
      <View
        style={{
          borderBottomWidth: 2,
          borderColor: 'white',
          paddingVertical: 20,
          paddingHorizontal: 10,
          marginVertical: 8,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              flex: 10,
              borderWidth: 0.5,
              borderColor: 'white',
            }}
            placeholder="Enter Todo"
            onChangeText={e => settxt(e)}
          />
          <View style={{marginHorizontal: 10, flex: 1}}>
            <TouchableOpacity onPress={add}>
              <Image
                source={require('../Images/add.png')}
                style={{width: '100%', resizeMode: 'contain', marginTop: 10}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {list.map((e, i) => (
        <View key={i} style={style.todos}>
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: 10, flex: 1}}>
              {/* <TouchableOpacity >
                <Image
                  source={require('../Images/check.png')}
                  style={{width: '80%', resizeMode: 'contain'}}
                />
              </TouchableOpacity> */}
            </View>
            <Text style={([style.font], {flex: 8, textAlign: 'auto'})}>
              {e}
            </Text>
            <View style={{marginHorizontal: 10, flex: 1}}>
              <TouchableOpacity onPress={() => del(i)}>
                <Image
                  source={require('../Images/delete.png')}
                  style={{width: '80%', resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginHorizontal: 10, flex: 1}}>
              <TouchableOpacity onPress={() => edit(i)}>
                <Image
                  source={require('../Images/edit.png')}
                  style={{width: '80%', resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

export default Todo;
const style = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'white',
    marginVertical: 26,
    marginHorizontal: 16,
  },
  font: {
    color: 'white',
    fontSize: 20,
  },
  todos: {
    margin: 18,
    padding: 8,
    borderWidth: 1,
    borderColor: 'white',
  },
});
