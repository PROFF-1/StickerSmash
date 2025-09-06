import { StyleSheet, Text, View, Pressable} from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'


type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  onPress?: () => void;
  label: string;
}

export default function IconButtons({ icon, onPress, label }: Props) {
  return (
  
      <Pressable onPress={onPress} style={styles.iconButton}>
        <MaterialIcons name={icon} size={38} color="#ffffffff" />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
  
  )
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
})