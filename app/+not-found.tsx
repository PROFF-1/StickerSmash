import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function notFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>404 - Not FoundScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
  },
  text: {
    fontSize: 16,
    color: "#fff",
  },
  linkText: {
    fontSize: 16,
    color: "#008af3ff",
    textDecorationLine: "underline",
  }
})