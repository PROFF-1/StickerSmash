import { StyleSheet, Text, View, ImageSourcePropType } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'

type Props = {
  imageSource: ImageSourcePropType;
  imageSize: number;
}

export default function EmojiSticker({ imageSource, imageSize }: Props) {
  return (
    <View style={{top: -350}}>
      <Image source={imageSource} style={{ width: imageSize, height: imageSize }} />
    </View>
  )
}

const styles = StyleSheet.create({})