// import { View, Text, StyleSheet, Platform } from "react-native";


// const App = () => {
//     return (
//         <View>
//             <Text style={{ fontSize: 20 }}>Platform: {Platform.OS}</Text>
//             {
//                 Platform.OS === "android" ?
//                     <View style={{ backgroundColor: "green", height: 100, width: 100 }}></View> :
//                     <View style={{ backgroundColor: "red", height: 100, width: 100 }}></View>
//             }
//             <Text style={styles.text}>Hello</Text>
//             <Text style={{fontSize:20}}>{JSON.stringify(Platform)}</Text>
//         </View>
//     )
// }



// const styles = StyleSheet.create({
//     text: {
//         color: Platform.OS === "android" ? "orange" : "blue",
//         fontSize:20,
//     }
// })

// export default App;

import { View, Text } from "react-native";
import WebView from "react-native-webview";

const App = () => {
    return (
       
            <WebView source={{uri: "https://reactnative.dev/"}}/>
        
    )
}

export default App;
