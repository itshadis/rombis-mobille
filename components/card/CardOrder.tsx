import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import DottedLineSvg from "../DottedLine";
import ArrowLabel from "../label/Label";
import Card from "./Card";
import CardCollapse from "./CardCollapse";

interface CardOrderProps {
  children?: ReactNode;
  data: {
    id: number;
    penumpang: string[];
    kursi: string[];
    trayek: string;
    statusPembayaran: number;
    statusKeberangkatan: string;
    tanggalBerangkat: string;
    from: string;
    to: string;
    tikum: string;
    estimasi: string;
    totalPembayaran: number;
  }
}

const STATUS_BAYAR: Record<number, string> = {
  1: "Menunggu Pembayaran",
  2: "Menunggu Persetujuan",
  3: "Sudah Dibayar",
}

const LABEL_COLOR: Record<number, string> = {
  1: "#ef4444",
  2: "#fa7916",
  3: "#38b524",
}

const CardOrder = ({ data, children }: CardOrderProps) => {
  return (
    <CardCollapse
      headerContent={
        <View className="p-2 gap-2">
          <ArrowLabel label={STATUS_BAYAR[data.statusPembayaran]} color={LABEL_COLOR[data.statusPembayaran]} />
          <Text className="font-semibold">Bus: {data.trayek}</Text>
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
                <Text className="text-[#ababab]">{data.from}</Text>
              </View>

              <View className="gap-2 items-center">
                <MaterialCommunityIcons name="bus-side" color="#0891b2" size={24} />
                <Text className="text-[#ababab]">{data.estimasi}</Text>
              </View>

              <View className="items-end gap-2">
                <View className="items-center justify-center">
                  <View className="rounded-full w-6 h-6 bg-cyan-600" />
                  <View className="rounded-full w-4 h-4 bg-white absolute z-10" />
                </View>
                <Text className="text-[#ababab]">{data.to}</Text>
              </View>
            </View>
          </View>
        </View>
      }
    >
      <View className="p-2 mt-8 border-gray-300 gap-8">
        <View className="gap-2">
          <Text className="text-sm">Tanggal Keberangkatan : <Text className="font-semibold">{data.tanggalBerangkat}</Text></Text>
          <Card className="gap-1">
            <View className="flex-row">
              <Text className="w-1/3 text-sm">Penumpang</Text>
              <Text className="text-sm">:</Text>
              <Text className="text-sm ml-2">{data.penumpang.join(", ")}</Text>
            </View>
            <View className="flex-row">
              <Text className="w-1/3 text-sm">Kursi</Text>
              <Text className="text-sm">:</Text>
              <Text className="text-sm ml-2">{data.kursi.join(", ")}</Text>
            </View>
            <View className="flex-row">
              <Text className="w-1/3 text-sm">Titik Kumpul</Text>
              <Text className="text-sm">:</Text>
              <Text className="text-sm ml-2">{data.tikum}</Text>
            </View>
            <View className="flex-row">
              <Text className="w-1/3 text-sm">Status Keberangkatan</Text>
              <Text className="text-sm">:</Text>
              <Text className="text-sm ml-2">{data.statusKeberangkatan}</Text>
            </View>
          </Card>
          <Text className="font-medium">Total Pembayaran : Rp {data.totalPembayaran}</Text>
        </View>
        <TouchableOpacity className="bg-cyan-800 rounded-full py-3 mt">
          <Text className="text-lg text-center text-white font-medium">Bayar</Text>
        </TouchableOpacity>
      </View>
    </CardCollapse>
  );
};

export default CardOrder;
