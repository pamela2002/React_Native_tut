import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';

const Stack = createNativeStackNavigator();
const App = () => {
  const btnAction = () => {
    console.warn('btn pressed');
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 25,
          },
        }}>
        <Stack.Screen name="Login" component={Login}
          options={{
            headerTitle: () => <Button onPress={btnAction} title='Left' />,
            headerRight:() =><Headers/>
        }}/>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Headers = () => {
    return (
      <Button title='btn'/>
    )
  }



const Home = (props) => {
  const { name, age } = props.route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home Page</Text>
      <Text style={{ fontSize: 30 }}>{name}</Text>
      <Text style={{ fontSize: 30 }}>{age}</Text>
    </View>
  );
};

const Login = (props) => {
  const name = "Pamela";
  const age = 22;
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, alignContent: 'center' }}>Login Page</Text>
      <Button
        title="Go To Home Page"
        onPress={() => props.navigation.navigate('Home', {name:name, age:age})}
      />
    </View>
  );
}

export default App;
