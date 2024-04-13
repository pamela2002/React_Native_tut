import React, {useState} from 'react';
import { Text, View, Button, TextInput, StyleSheet, sty } from 'react-native';

const App = () => {
  const [name, setName] = useState("Pamela");
  const [city, setCity] = useState("");
  const [display, setDisplay] = useState(false);
  const age = 22;
  return (
    <View>
      <Text style={{fontSize: 30}}>Hello {name}</Text>
      <Button title='Press Here' onPress={() => { setName("Pam") }} color={"green"}></Button>
      <UserData age={age} />
      <TextInput placeholder='Enter your city' value={city} onChangeText={(text) => { setCity(text) }} style={{borderColor:"red", borderWidth:2, marginTop:4, marginBottom:4}} />
      <Button title='Show details' onPress={() => setDisplay(true)} />
      <Button title='Hide details' onPress={() => { setDisplay(false); setCity("") }} />
      <View>
      {
        display ? <Text style={styles.textInput}>
          Name of youe city: {city}
        </Text> : null
        }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 30,
    marginTop: 10
  }
})

const UserData = (props) => {
  return (
    <View>
      <Text style={{fontSize:20}}>My age is {props.age}</Text>
    </View>
  )
}

export default App;
