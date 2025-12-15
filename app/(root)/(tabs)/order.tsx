import CardOrder from "@/components/card/CardOrder";
import React from "react";
import { FlatList, Text, View } from "react-native";

const data = [
  {
    id: 1,
    atasNama: "Samin",
    kursi: 1,
    statusPembayaran: "Menunggu Pembayaran",
    statusKeberangkatan: "Belum Berangkat",
    tanggalBerangkat: "20 Desember 2025",
    from: "Jakarta",
    to: "Yogyakarta",
    tikum: "Grogol",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, autem. Obcaecati labore reiciendis odio amet. Id officia enim error corrupti unde? Aliquid vitae sit sapiente ratione laboriosam, facilis recusandae vel fuga ad quisquam molestias sunt tempore, excepturi fugiat rem amet voluptas error sint inventore adipisci? Quisquam dolorum eum excepturi tempore.",
  },
  {
    id: 2,
    atasNama: "Samin",
    kursi: 2,
    statusPembayaran: "Menunggu Pembayaran",
    statusKeberangkatan: "Belum Berangkat",
    tanggalBerangkat: "20 Desember 2025",
    from: "Jakarta",
    to: "Yogyakarta",
    tikum: "Grogol",
    body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, autem. Obcaecati labore reiciendis odio amet. Id officia enim error corrupti unde? Aliquid vitae sit sapiente ratione laboriosam, facilis recusandae vel fuga ad quisquam molestias sunt tempore, excepturi fugiat rem amet voluptas error sint inventore adipisci? Quisquam dolorum eum excepturi tempore.",
  },
];

const OrderScreen = () => {
  return (
    <View className="mx-4">
      <Text className="text-2xl font-semibold my-4">Pesanan Saya</Text>

      <FlatList 
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <CardOrder>
            <Text>{item.body}</Text>
          </CardOrder>
        )}
      />
    </View>
  );
};

export default OrderScreen;
