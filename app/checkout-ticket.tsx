import { SeatBus } from "@/components/SeatBus";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, Text, View } from "react-native";

const DATA_DUMMY = {
  id: 1,
  tanggalBrangkat: "Min, 12 Des 2025",
  tanggalSampai: "Sen, 13 Des 2025",
  jamBerangkat: "15.50",
  jamSampai: "15.00",
  from: "Grogol",
  to: "Solo",
  tipe: 22,
  trayek: "Handoyo Via Semarang",
  stops: 3,
  totalKursi: 30,
  sisaKursi: 30,
  harga: "Rp250.000",
};

const CheckoutTicket = () => {
  return (
    <>
      <View className="mt-4 gap-4">
        <View className="mx-3">
          <View className="rounded-2xl overflow-hidden">
            <LinearGradient colors={["#06b6d4", "#cef2e9"]} start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}>
              <View className="gap-3 p-4">
                <Text className="text-2xl font-semibold">Bus {DATA_DUMMY.trayek}</Text>

                <View className="flex-row justify-between">
                  <View>
                    <Text className="text-neutral-500">Dari</Text>
                    <Text className="text-lg font-semibold">{DATA_DUMMY.tanggalBrangkat}</Text>
                    <Text className="text-lg font-semibold">{DATA_DUMMY.jamBerangkat}</Text>
                  </View>

                  <View className="justify-center">
                    <MaterialCommunityIcons name="arrow-right" size={20} color="#737373" />
                  </View>

                  <View>
                    <Text className="text-neutral-500">Ke</Text>
                    <Text className="text-lg font-semibold">{DATA_DUMMY.tanggalBrangkat}</Text>
                    <Text className="text-lg font-semibold">{DATA_DUMMY.jamBerangkat}</Text>
                  </View>
                </View>

                <View className="flex-row justify-between">
                  <Text className="text-neutral-500">{DATA_DUMMY.from}</Text>
                  <Text className="text-neutral-500">{DATA_DUMMY.to}</Text>
                </View>

                <View className="flex-row justify-between items-end">
                  <View className="gap-[2px]">
                    <Text className="text-neutral-500">Harga</Text>
                    <Text className="text-xl font-semibold">{DATA_DUMMY.harga}</Text>
                  </View>
                  <Text className="text-neutral-500">x2</Text>
                  <Text className="text-xl font-semibold">{DATA_DUMMY.harga}</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        </View>

        <View className="border-b border-neutral-300"></View>

        <ScrollView>
          <View className="items-center mb-[320px]">
            <View className="flex-row"></View>

            <SeatBus type={22} totalSeat={70} disabledSeats={[1,4,6,10]} />
          </View>
        </ScrollView>
      </View>

      <View className="absolute bottom-0 z-10 w-full justify-center items-center h-24 bg-white border-t border-neutral-300">
        <View className="w-[90%]">
          <Pressable className="w-full" onPress={() => {}}>
            <Text className="bg-cyan-700 py-4 text-white rounded-full text-center active:bg-cyan-600">Pesan Sekarang</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default CheckoutTicket;
