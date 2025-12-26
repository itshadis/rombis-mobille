import useAuthStore from "@/utils/authStore";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  const { login } = useAuthStore()
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity onPress={login} className="bg-cyan-800  py-2 px-10 rounded-full">
        <Text className="text-white text-center text-lg">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
