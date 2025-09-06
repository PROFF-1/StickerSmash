import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";
import ImageViewer from "@/Components/ImageViewer";
import Button from "@/Components/Button";
import * as ImagePicker from 'expo-image-picker';



const image = require('../../assets/images/background-image.png');

export default function Index() {

  const pickImage = async () => {
    let imagePicked = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    })

    if (!imagePicked.canceled) {
      console.log(imagePicked);
    }else {
      console.log('User cancelled the image picker');
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={image} />
      </View>
      <View style={styles.footerContainer}>
         <Button theme="primary" label="Choose Photo" onPress={pickImage} />
          <Button label="Use this Photo" />
      </View>
     
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  footerContainer: {
    flex: 2 / 3,
    alignItems: 'center',
  },
});