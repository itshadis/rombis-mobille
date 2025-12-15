import { Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React, { ReactNode } from 'react';
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabIcon = ({ icon, focused }: { icon: ReactNode, focused: boolean }) => {
  return (
    <View className="flex-1 mt-3 flex flex-col items-center">
      {icon}
    </View>
  )
}

const TabLayout = () => {
  const inset = useSafeAreaInsets()

  return (
    <View style={{marginTop: inset.top, flex: 1}}>
      <Tabs
        screenOptions={{
          sceneStyle: {
            backgroundColor: '#ffffff',
          },
        animation: "shift",
        lazy: true
        }}>
        <Tabs.Screen 
          name='index'
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={<Ionicons name="home" size={18} color={focused ? "#007aff" : ""} />} />
            )
          }}
        />
        <Tabs.Screen 
          name='order'
          options={{
            headerShown: false,
            title: "Pesanan Saya",
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={<MaterialCommunityIcons name="file-document-edit-outline" size={18} color={focused ? "#007aff" : ""} />} />
            )
          }}
        />
        <Tabs.Screen 
          name='ticket'
          options={{
            headerShown: false,
            title: "Daftar Tiket",
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={<Entypo name="ticket" size={18} color={focused ? "#007aff" : ""} />} />
            )
          }}
        />
        <Tabs.Screen 
          name='profile'
          options={{
            title: "Profil Akun",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={<FontAwesome5 name="user-cog" size={18} color={focused ? "#007aff" : ""} />} />
            )
          }}
        />
      </Tabs>
    </View>
  )
}

export default TabLayout