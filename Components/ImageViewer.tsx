import { StyleSheet, Text, View, ImageSourcePropType} from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

type Props = {
  imageSource: ImageSourcePropType;
  selectedImage? : string;
};

export default function ImageViewer({ imageSource, selectedImage }: Props) {

  const image = selectedImage ? { uri: selectedImage } : imageSource;
  return (
    <View>
      <Text>ImageViewer</Text>
      <Image source={image} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})