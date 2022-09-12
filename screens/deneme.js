
import { TouchableOpacity } from "react-native";
import React , {useState,useEffect} from "react";
import {
  
  HStack,
  VStack,
  FormControl,
  Text,
  Input,
  Box,
  Heading,
  Link,
  Pressable,
  
} from "native-base";
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function Deneme({ navigation }) {

    const [image, setImage] = useState(null);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    }



  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      padding={5}
      _dark={{
        bg: "coolGray.800",
      }}
      _light={{
        bg: "warmGray.50",
      }}
    >
     
     <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    




    </Box>
  );
}

export default Deneme;