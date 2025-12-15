import CardOrder from "@/components/card/CardOrder";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const data = [
  {
    id: 1,
    penumpang: ["Samin A"],
    kursi: ["1A"],
    trayek: "Handoyo Via Semarang",
    statusPembayaran: 1,
    statusKeberangkatan: "Belum Berangkat",
    tanggalBerangkat: "20 Desember 2025",
    from: "Jakarta",
    to: "Yogyakarta",
    tikum: "Grogol",
    estimasi: "10 Jam",
    totalPembayaran: 650000,
  },
  {
    id: 2,
    penumpang: ["Samin B"],
    kursi: ["1B"],
    trayek: "Handoyo Via Semarang",
    statusPembayaran: 2,
    statusKeberangkatan: "Belum Berangkat",
    tanggalBerangkat: "20 Desember 2025",
    from: "Jakarta",
    to: "Yogyakarta",
    tikum: "Grogol",
    estimasi: "10 Jam",
    totalPembayaran: 650000,
  },
  {
    id: 3,
    penumpang: ["Test A", "Test B"],
    kursi: ["2A", "2B"],
    trayek: "Handoyo Via Semarang",
    statusPembayaran: 3,
    statusKeberangkatan: "Belum Berangkat",
    tanggalBerangkat: "20 Desember 2025",
    from: "Jakarta",
    to: "Yogyakarta",
    tikum: "Grogol",
    estimasi: "10 Jam",
    totalPembayaran: 650000,
  },
];

const OrderScreen = () => {
  const inset = useSafeAreaInsets()

  return (
    <View className="mx-4">
      <Text className="text-2xl font-semibold my-4">Pesanan Saya</Text>

      <FlatList 
        data={data}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          rowGap: 8,
          paddingBottom: inset.bottom + 20,
        }}
        renderItem={({item}) => (
          <CardOrder data={item} />
        )}
      />
    </View>
  );
};

export default OrderScreen;
