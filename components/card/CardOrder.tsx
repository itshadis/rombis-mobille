import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Text, View } from "react-native";
import DottedLineSvg from "../DottedLine";
import ArrowLabel from "../label/Label";
import CardCollapse from "./CardCollapse";

interface CardOrderProps {
  children?: ReactNode;
}

const CardOrder = ({ children }: CardOrderProps) => {
  return (
    <CardCollapse
      className="mb-2"
      headerContent={
        <View className="p-4 gap-2">
          <ArrowLabel label="Menunggu Pembayaran" color="#ef4444" />
          <Text>Bus: Handoyo Via Semarang</Text>
          <View>
            <View className="relative -z-10 top-4 mx-2">
              <DottedLineSvg dotSize={1} gap={6} color="#e8e8e8" />
            </View>
            <View className="flex-row items-center justify-between">
              <View className="items-start gap-2">
                <View className="items-center justify-center">
                  <View className="rounded-full w-6 h-6 bg-cyan-600" />
                  <View className="rounded-full w-4 h-4 bg-white absolute z-10" />
                </View>
                <Text className="text-[#ababab]">Jakarta</Text>
              </View>

              <View className="gap-2">
                <MaterialCommunityIcons name="bus-side" color="#0891b2" size={24} />
                <Text className="text-[#ababab]">10 J</Text>
              </View>

              <View className="items-end gap-2">
                <View className="items-center justify-center">
                  <View className="rounded-full w-6 h-6 bg-cyan-600" />
                  <View className="rounded-full w-4 h-4 bg-white absolute z-10" />
                </View>
                <Text className="text-[#ababab]">Yogyakarta</Text>
              </View>
            </View>
          </View>
        </View>
      }
    >
      <View className="p-4">
        {children}
      </View>
    </CardCollapse>
  );
};

export default CardOrder;
