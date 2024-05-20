// import {View, StyleSheet, Text, Pressable} from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.main}>
//           <Pressable onPress={() => { console.warn("normal on press") }}
//               onLongPress={() => { console.warn("normal on press") }}
//               onPressIn={() => { console.warn("press in") }}
//               onPressOut={() => { console.warn("press out") }}>
//         <Text style={styles.pressableBtn}>Pressable</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   pressableBtn: {
//     backgroundColor: 'blue',
//     color: '#fff',
//       padding: 10,
//       margin: 10,
//       borderRadius: 10,
//       fontSize: 20,
//       textAlign: 'center',
//       shadowColor: '#000',
//     elevation: 5,
//   },
// });

// export default App;


import { useState } from "react";
import { View, StatusBar, StyleSheet, Button } from "react-native";

const App = () => {
    const [hide, setHide] = useState(false);
    const [barStyle, setBarStyle] = useState("default");
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="orange"
                barStyle={barStyle}
                hidden={hide} />
            <Button title="Toggle Status Bar" onPress={()=>{setHide(!hide)}}/>
            <Button title="Update Style" onPress={()=>{setBarStyle("dark-content")}}/>
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default App;