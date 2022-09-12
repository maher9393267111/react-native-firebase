import * as React from "react";
import {Box, Text, Heading, VStack, FormControl, Input, Link, Button, 
  HStack, Center, NativeBaseProvider } from "native-base";
import { View, Image, StyleSheet } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { auth } from "../firebase/config";
import { SafeAreaView } from "react-native-web";
import {
    createUserWithEmailAndPassword,

   
  } from "firebase/auth"

function NuevoUs() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignup = async() => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Usuario registered", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="500">
        <Box align="">
          {" "}
          {/* <Image
            style={{ width: 303, height: 108, marginBottom: 15 }}
            source={require("https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn")}
          /> */}
        </Box>

        <Box align="center">
          <Heading
          className=' bg-blue-300 text-center font-bold h-12   items-center'
            size="lg"
            fontWeight="600"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
          >
            <Text className =' self-center'>
                Register
            </Text>
          
          </Heading>
        </Box>
        <Box align="Center">
          <Heading
            mt="1"
            _dark={{
              color: "warmGray.200",
            }}
            color="coolGray.600"
            fontWeight="medium"
            size="xs"
          >
            Log in
          </Heading>
        </Box>
        <VStack space={3} mt="6">
          <FormControl>
            <FormControl.Label className=" text-red-500 font-bold">User Email</FormControl.Label>
            <Input onChangeText={(text) => setEmail(text)} />
          </FormControl>
          <FormControl>
            <FormControl.Label>password</FormControl.Label>
            <Input type="password" onChangeText={(text) => setPassword(text)} />
          </FormControl>
          <Button

            mt="2"
            colorScheme="emerald"
            title="Menu"
            onPress={handleSignup}
          >
            Enviar
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <NuevoUs />
      </Center>
    </NativeBaseProvider>
  );
};