import Form from "@/components/form";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

const ProfileScreen = () => {
  return (
    <View className="mx-4">
      <View className="relative items-center justify-center h-16">
        <TouchableOpacity className="absolute -left-2 top-[22%]">
          <MaterialIcons name="keyboard-arrow-left" size={32} />
        </TouchableOpacity>
        <Text className="text-2xl font-semibold">Profile</Text>
      </View>

      <View className="items-center my-4">
        <View className="w-24 h-24 rounded-full bg-gray-300 items-center justify-center">
          <FontAwesome name="user-circle" size={48} />
        </View>
        <Text className="mt-2 text-lg font-medium text-neutral-600">Atmin</Text>
      </View>

      <View className="gap-2">
        <Form.Input className="rounded-xl" label="Username" value="Atmin Jaya" />
        <Form.Input className="rounded-xl" label="Email" value="AtminRombis@gmail.com" />
        <Form.Input className="rounded-xl" label="Nomor Telepon" value="08123456789" />
        <Form.Input className="rounded-xl" label="Jenis Kelamin" value="Laki-laki" />
      </View>

      <Pressable className="bg-cyan-800 rounded-full p-4 items-center active:bg-cyan-900 border border-white mt-8">
        <Text className="text-white text-lg">Simpan Perubahan</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
