import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

interface CardTicketProps {
  data: {
    id: number;
    jamBerangkat: string;
    jamSampai: string;
    from: string;
    to: string;
    trayek: string;
    stops: number;
    totalKursi: number;
    sisaKursi: number;
    harga: string;
  };
}

const CardTicket = ({ data }: CardTicketProps) => {
  return (
    <View className="w-full items-center">
      <Pressable
        className="w-[95%] gap-2 rounded-xl overflow-hidden active:"
        style={{ boxShadow: "2px 2px 2px 1px rgba(0,0,0,0.2)" }}
        onPress={() => {
          router.push({
            pathname: "/checkout-ticket",
            params: { id: data.id }
          })
        }}
      >
        {({ pressed }) => (
          <LinearGradient
            colors={
              pressed
                ? ["#bae6fd", "#e0f2fe"]
                : ["#e6faff", "#f2fcfc"]
            }
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <View className="p-4 gap-6">
              <View className="flex-row justify-between items-center">
                <View className="items-center justify-center">
                  <Text className="text-lg font-semibold">{data.jamBerangkat}</Text>
                  <Text className="text-neutral-500">{data.from}</Text>
                </View>
                <View className="flex-row gap-1 items-center justify-center">
                  <MaterialCommunityIcons name="bus-stop" color="#155e75" size={20} />
                  <Text className="text-neutral-500">{data.stops} Stops</Text>
                </View>
                <View className="items-center justify-center">
                  <Text className="text-lg font-semibold">{data.jamSampai}</Text>
                  <Text className="text-neutral-500">{data.to}</Text>
                </View>
              </View>
              <View className="flex-row justify-between items-end">
                <View className="gap-1">
                  <Text className="text-xl font-semibold">Bus {data.trayek}</Text>
                  <Text className="text-neutral-500">{data.sisaKursi} kursi tersisa</Text>
                </View>
                <Text className="text-red-600 font-semibold">{data.harga}</Text>
              </View>
            </View>
          </LinearGradient>
        )}
      </Pressable>
    </View>
  );
};

export default CardTicket;
