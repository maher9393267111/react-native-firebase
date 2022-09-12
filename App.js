import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './screens/Home.js'
import Register from './screens/Register'
import Deneme from './screens/deneme.js';
import {

  NativeBaseProvider,
  Center,
Box,
  Fab,
  Icon,
  Modal,
  FormControl,
  Input,
  Button,
  Divider,
  HStack,
  VStack,
  Heading,
  TextArea,

  IconButton
} from "native-base";
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

//import tw from 'twrnc';

const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <NativeBaseProvider>
    <NavigationContainer>
    


      <Stack.Navigator initialRouteName="myApp">

      <Stack.Screen
          name="Deneme"
          component={Deneme}
          options={{ headerShown: false }}
        />




      <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />



      <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />



    



     </Stack.Navigator>


    </NavigationContainer>
    </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
