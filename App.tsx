import React,{useState} from 'react';
import {Text, View, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState("Pamela");
  const age = 22;
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hello {name}</Text>
      <Button title='Press Here' onPress={() => { setName("Pam") }} color={"green"}></Button>
      <UserData age={age} />
    </View>
  );
}

const UserData = (props) => {
  return (
    <View>
      <Text style={{fontSize:20}}>My age is {props.age}</Text>
    </View>
  )
}

export default App;
