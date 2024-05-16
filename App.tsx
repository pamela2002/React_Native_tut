// import { useState } from 'react';
// import {View, StyleSheet, ActivityIndicator, Button} from 'react-native';

// const App = () => {
//   const [show, setShow] = useState(false);
//   const displayLoader = () => {
//     setShow(true);
//     // api call in 3 sec
//     setTimeout(() => {
//       setShow(false);
//     }, 3000);
//   }
//   return (
//     <View style={styles.main}>
//       {/* <ActivityIndicator size={"large"} color="red" animating={true} /> */}
//       <ActivityIndicator size={80} color="green" animating={show} />
//       <Button title='Show Loader' onPress={displayLoader}/>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import {useState} from 'react';
import {View, Button, Modal, StyleSheet, Text} from "react-native";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.main}>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Button title="Close Modal" onPress={() => setShowModal(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="Open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 5,
  },
  modalText: {
    fontSize: 30,
    marginBottom: 20,
  }
});
