import { StyleSheet, Text, View, ImageSourcePropType} from 'react-native'
import React from 'react'
import { Image } from 'expo-image';

type Props = {
  imageSource: ImageSourcePropType;
};

export default function ImageViewer({ imageSource }: Props) {
  return (
    <View>
      <Text>ImageViewer</Text>
      <Image source={imageSource} style={styles.image} />
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