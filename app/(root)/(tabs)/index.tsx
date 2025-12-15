import CardBus from "@/components/card/CardBus";
import Form from "@/components/form";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface IForm {
  from: string;
  to: string;
  date: string;
}

const HomeScreen = () => {
  const [form, setForm] = useState<IForm>({} as IForm);

  return (
    <View className="mx-4 pt-4 gap-4">
      <View className="gap-1">
        <Text className="text-4xl font-medium">Hi, User</Text>
        <Text className="text-neutral-500">Cari Perjalanan Sekarang!</Text>
      </View>

      <View className="gap-2">
        <Form.Input label="Dari" value={form.from} onChange={(text) => setForm({ ...form, from: text })} />
        <Form.Input label="Tujuan" value={form.to} onChange={(text) => setForm({ ...form, to: text })} />
        <Form.DateTimePicker
          label="Tanggal Berangkat"
          value={form.date}
          onChange={(date) => setForm({ ...form, date: date.toISOString() })}
        />
        <Pressable className="bg-cyan-800 rounded-full p-4 items-center mt-4 active:bg-cyan-900 border border-white">
          <Text className="text-white text-lg">Cari Perjalanan</Text>
        </Pressable>
      </View>

      <View>
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-2xl font-semibold">Daftar Bus</Text>
          <TouchableOpacity>
            <Text className="text-red-600 font-semibold">Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          snapToInterval={0}
          snapToAlignment="start"
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="flex-row gap-4"
        >
          <CardBus title="Handoyo Via Temanggung" />
          <CardBus title="Handoyo Via Solo" />
          <CardBus title="Handoyo Via Yogyakarta" />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
