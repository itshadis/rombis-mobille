import { Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import { ReactNode } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabIcon = ({ icon, focused }: { icon: ReactNode; focused: boolean }) => {
  return <View className="flex-1 mt-3 flex flex-col items-center">{icon}</View>;
};

const ProtectedTabLayout = () => {
  const isLoggedIn = true;
  const inset = useSafeAreaInsets();

  if (!isLoggedIn) return <Redirect href="/login" />;

  return (
    <View style={{ marginTop: inset.top, flex: 1 }}>
      <Tabs
        screenOptions={{
          sceneStyle: {
            backgroundColor: "#ffffff",
          },
          animation: "shift",
          lazy: true,
          tabBarStyle: {
            height: 72
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarActiveTintColor: "#0891b2",
            tabBarInactiveTintColor: "#6b7280",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={<Ionicons name="home" size={18} color={focused ? "#0891b2" : ""} />} />
            ),
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            headerShown: false,
            title: "Pesanan Saya",
            tabBarActiveTintColor: "#0891b2",
            tabBarInactiveTintColor: "#6b7280",
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                icon={<MaterialCommunityIcons name="file-document-edit-outline" size={18} color={focused ? "#0891b2" : ""} />}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="ticket"
          options={{
            headerShown: false,
            title: "Daftar Tiket",
            tabBarActiveTintColor: "#0891b2",
            tabBarInactiveTintColor: "#6b7280",
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={<Entypo name="ticket" size={18} color={focused ? "#0891b2" : ""} />} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profil Akun",
            tabBarActiveTintColor: "#0891b2",
            tabBarInactiveTintColor: "#6b7280",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={<FontAwesome5 name="user-cog" size={18} color={focused ? "#0891b2" : ""} />} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

export default ProtectedTabLayout;
