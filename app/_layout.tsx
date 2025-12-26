import useAuthStore from "@/utils/authStore";
import * as NavigationBar from "expo-navigation-bar";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Platform } from "react-native";
import "../global.css";

const RootLayout = () => {
  const { isLoggedIn } = useAuthStore();

  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setVisibilityAsync("hidden");
      NavigationBar.setBehaviorAsync("inset-swipe");
    }
  }, []);

  return (
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" options={{ headerShown: false }} />
      </Stack.Protected>
      <Stack.Screen name="checkout-ticket" options={{ presentation: "modal", headerTitle: "Pemesanan Tiket" }} />
    </Stack>
  );
};

export default RootLayout;
