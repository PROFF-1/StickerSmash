import { Text, View, StyleSheet, ImageSourcePropType } from "react-native";
import {Link} from "expo-router";
import * as ImagePicker from 'expo-image-picker';
import {useState} from 'react';



import ImageViewer from "@/Components/ImageViewer";
import Button from "@/Components/Button";
import IconButtons from "@/Components/IconButtons";
import CircleButton from "@/Components/CircleButton";
import EmojiPicker from "@/Components/EmojiPicker";
import EmojiList from "@/Components/EmojiList";
import EmojiSticker from "@/Components/EmojiSticker";



const image = require('../../assets/images/background-image.png');

export default function Index() {
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImage = async () => {
    let imagePicked = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    })

    if (!imagePicked.canceled) {
      setImageUri(imagePicked.assets[0].uri);
      setShowAppOptions(true);
    }else {
      console.log('User cancelled the image picker');
    }
  }



  const reset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    setShowEmojiPicker(true);
  }

  const onClose = () => {
    setShowEmojiPicker(false);
  }

  const onSaveImage = () => {}
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={image} selectedImage={imageUri} />
        {selectedEmoji ? <EmojiSticker imageSource={selectedEmoji} imageSize={40} /> : null}
      </View>
      {showAppOptions?(
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButtons icon="refresh" label="Reset" onPress={reset} />
            <CircleButton onPress={onAddSticker} />
            <IconButtons icon="save" label="Save" onPress={onSaveImage} />
          </View>
        </View>
      ):(
      <View style={styles.footerContainer}>
         <Button theme="primary" label="Choose Photo" onPress={pickImage} />
          <Button label="Use this Photo" onPress={() => {setShowAppOptions(true)}} />
      </View>
      )
}
        <EmojiPicker onClose={onClose} isVisible={showEmojiPicker}>
          <EmojiList onCloseModal={onClose} onSelect={setSelectedEmoji} />
        </EmojiPicker>
    
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
    flex: 1.5 / 3,
    alignItems: 'center',
  },

  optionsContainer: {
    flex: 1.5/3,
    width: '100%',
    alignItems: 'center',
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
});