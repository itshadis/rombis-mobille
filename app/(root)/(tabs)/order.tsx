import CardOrder from "@/components/card/CardOrder";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { FlatList, Modal, Pressable, Text, View } from "react-native";
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
  const inset = useSafeAreaInsets();
  const [openPayment, setOpenPayment] = useState<{ open: boolean; id?: number; payment?: number; tanggal?: string }>({
    open: false,
    id: undefined,
    payment: undefined,
  });

  return (
    <View className="mx-4">
      <Text className="text-2xl font-semibold my-4">Pesanan Saya</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          rowGap: 8,
          paddingBottom: inset.bottom + 20,
        }}
        renderItem={({ item }) => (
          <CardOrder data={item} onPay={(id, payment, tanggal) => setOpenPayment({ open: true, id, payment, tanggal })} />
        )}
      />

      <Modal
        visible={openPayment.open}
        transparent
        animationType="slide"
        onRequestClose={() => setOpenPayment({ open: false, id: undefined, payment: undefined, tanggal: undefined })}
      >
        <Pressable
          onPress={() => setOpenPayment({ open: false, id: undefined, payment: undefined, tanggal: undefined })}
          style={{
            flex: 1,
          }}
        />

        <View className="rounded-t-2xl overflow-hidden h-3/4">
          <LinearGradient colors={["#0e7490", "#0891b2"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} className="p-5 h-full">
            <View className="gap-4">
              <Text className="text-white text-2xl font-bold">Detail Pembayaran</Text>

              <View className="gap-1">
                <Text className="text-white text-lg">Total Harga:</Text>
                <Text className="text-white text-2xl font-semibold">Rp {openPayment.payment}</Text>
                <Text className="text-white ">Pastikan Jumlah Transfer Sudah Benar Hingga 3 Digit Terakhir!</Text>
              </View>

              <View className="gap-1">
                <Text className="text-white text-lg">Tanggal Pembelian:</Text>
                <Text className="text-white text-2xl font-semibold">{openPayment.tanggal}</Text>
                <Text className="text-white text-base">Pastikan Pembayaran Dilakukan Sebelum 21 Desember 2025 18:00 WIB</Text>
              </View>

              <View className="gap-1 border-t-2 border-white pt-4 mb-10">
                <Text className="text-white text-lg">Silahkan transfer ke rekening berikut:</Text>
                <Text className="text-white text-2xl font-semibold">BANK Central Asia</Text>
                <View>
                  <Text className="text-white text-base">No Rekening : 123123123</Text>
                  <Text className="text-white text-base">Atas Nama : Ucup</Text>
                </View>
              </View>
            </View>

            <View className="gap-2 mt-10">
              <Pressable
                onPress={() => setOpenPayment({ open: true, id: undefined, payment: undefined, tanggal: undefined })}
                className="py-3 bg-cyan-900 rounded-full active:bg-cyan-800"
                style={{ boxShadow: "3px 3px 2px -1px rgba(0,0,0,0.2)" }}
              >
                <Text className="text-center text-white font-medium">Konfirmasi Sudah Bayar</Text>
              </Pressable>
              <Pressable
                onPress={() => setOpenPayment({ open: false, id: undefined, payment: undefined, tanggal: undefined })}
                className="py-3 bg-white rounded-full active:bg-slate-100"
                style={{ boxShadow: "3px 3px 2px -1px rgba(0,0,0,0.2)" }}
              >
                <Text className="text-center font-medium">Tutup</Text>
              </Pressable>
            </View>
          </LinearGradient>
        </View>
      </Modal>
    </View>
  );
};

export default OrderScreen;
