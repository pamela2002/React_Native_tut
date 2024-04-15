import React, {useState} from 'react';
import { Text, View, Button, TextInput, StyleSheet, FlatList, ScrollView } from 'react-native';

const App = () => {
  const [name, setName] = useState("Pamela");
  const [city, setCity] = useState("");
  const [display, setDisplay] = useState(false);
  const age = 22;
  const users = [
    {
      id: 1,
      name: "Pamela",
    },
    {
      id: 2,
      name: "John",
    },
    {
      id: 3,
      name: "Jane",
    },
    {
      id: 4,
      name: "Leo",
    }
  ];
  const cities = ["Durgapur", "Kolkata", "Siliguri","Mumbai"]

  return (
    // <View>
    //   <Text style={{fontSize: 30}}>Hello {name}</Text>
    //   <Button title='Press Here' onPress={() => { setName("Pam") }} color={"green"}></Button>
    //   <UserData age={age} />
    //   <TextInput placeholder='Enter your city' value={city} onChangeText={(text) => { setCity(text) }} style={{borderColor:"red", borderWidth:2, marginTop:4, marginBottom:4}} />
    //   <Button title='Show details' onPress={() => setDisplay(true)} />
    //   <Button title='Hide details' onPress={() => { setDisplay(false); setCity("") }} />
    //   <View>
    //   {
    //     display ? <Text style={styles.textInput}>
    //       Name of youe city: {city}
    //     </Text> : null
    //     }
    //     </View>
    // </View>
    <View>
      <Text style={{fontSize:30}}>Flat List</Text>
      <FlatList data={users} renderItem={({ item }) => <Text style={{ fontSize: 25 }}>{item.name}</Text>} />
      <ScrollView>
      {
        cities.map((city) => <Text>{city}</Text>)
        }
        </ScrollView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   textInput: {
//     fontSize: 30,
//     marginTop: 10
//   }
// })

// const UserData = (props) => {
//   return (
//     <View>
//       <Text style={{fontSize:20}}>My age is {props.age}</Text>
//     </View>
//   )
// }

export default App;
