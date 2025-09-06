import Ionicon from '@expo/vector-icons/Ionicons'
import { Tabs } from 'expo-router'
import React from 'react'


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#0037ffff",
        tabBarStyle: { backgroundColor: "#08cd08ff", paddingTop:10,paddingBottom: 10, position: "absolute", bottom: 50, width: "90%", marginHorizontal: 20, alignItems: "center", justifyContent: "center", borderRadius: 50 },
        headerStyle: { backgroundColor: "#25292e" },
        headerTitleAlign: "center",
        headerShadowVisible: false,
        headerTintColor: "#ffffffff",
      }}
    >
      <Tabs.Screen name="index" 
        options={{ title: "Home",
          tabBarIcon: ({ color, focused }) => 
          <Ionicon name={focused? "home-sharp" : 'home-outline'} color={focused ? color : '#000'} size={24}/>
         }} />
      <Tabs.Screen name="about" options={{ title: "About",
          tabBarIcon: ({ color, focused }) => 
          <Ionicon name={focused? "information-circle-sharp" : 'information-circle-outline'} color={focused ? color : '#000'} size={24}/>
      }} />
    </Tabs>
  )
}