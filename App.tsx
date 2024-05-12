// import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.main}>
//       <TouchableHighlight>
//         <Text style={styles.button}>Button</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button, styles.success]}>Success</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button, styles.primary]}>Primary</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button, styles.warning]}>Warning</Text>
//       </TouchableHighlight>
//       <TouchableHighlight>
//         <Text style={[styles.button, styles.error]}>Error</Text>
//       </TouchableHighlight>
//     </View>
//   );
// };
// export default App;

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//   },
//   button: {
//     padding: 10,
//     margin: 10,
//     backgroundColor: '#bbb',
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 24,
//     borderRadius: 10,
//     shadowColor: 'black',
//     elevation: 10,
//     shadowOpacity: 1,
//   },
//   primary: {
//     backgroundColor: 'blue',
//   },
//   warning: {
//     backgroundColor: 'gold',
//   },
//   error: {
//     backgroundColor: 'red',
//   },
//   success: {
//     backgroundColor: 'green',
//   },
// });

import {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const App = () => {
  const [selectedRadio, setSelectedRadio] = useState(0);
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 1 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSelectedRadio(2)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === 2 ? <View style={styles.radioBg}></View> : null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color: 'skyblue',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'skyblue',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioBg: {
    backgroundColor: 'skyblue',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
