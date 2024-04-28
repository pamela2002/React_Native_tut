// import React, {useState} from 'react';
// import { Text, View, Button, TextInput, StyleSheet, FlatList, ScrollView, SectionList } from 'react-native';

// const App = () => {
//   const [name, setName] = useState("Pamela");
//   const [city, setCity] = useState("");
//   const [display, setDisplay] = useState(false);
//   const age = 22;
//   const users = [
//     {
//       id: 1,
//       name: 'Pamela',
//       data : ['C', 'C++', 'React'],
//     },
//     {
//       id: 2,
//       name: 'John',
//       data: ['C', 'C++', 'React'],
//     },
//     {
//       id: 3,
//       name: 'Jane',
//       data: ['C', 'C++', 'React'],
//     },
//     {
//       id: 4,
//       name: 'Leo',
//       data: ['C', 'C++', 'React'],
//     },
//   ];
//   const cities = ["Durgapur", "Kolkata", "Siliguri","Mumbai"]

//   return (
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
    // <View>
    //   <Text style={{fontSize:30}}>Flat List</Text>
    //   <FlatList data={users} renderItem={({ item }) => <Text style={{ fontSize: 25 }}>{item.name}</Text>} />
    //   <ScrollView>
    //   {
    //     cities.map((city) => <Text>{city}</Text>)
    //     }
    //     </ScrollView>
    // </View>
//  
//   );
// }

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

// export default App;

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const App = () => (
  <SafeAreaView>
    <SectionList
      sections={DATA}
      // keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});

// previous topics revised and use effect Hooks for life cycle methods covered

export default App;