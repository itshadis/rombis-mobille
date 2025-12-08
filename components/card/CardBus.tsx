import { FontAwesome6, Fontisto } from "@expo/vector-icons";
import React, { ReactElement } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface CardBusProps {
  title?: string;
  img?: ReactElement;
  className?: string;
}

const CardBus = ({ title, img, className }: CardBusProps) => {
  return (
    <View className={["max-w-52 max-h-60 bg-transparent relative rounded-3xl overflow-hidden", className].join(' ')}>
      <View className="h-full w-full absolute bg-[#e8e8e8] opacity-75 backdrop-blur-sm">
      </View>

      <View className="p-5 justify-between h-full gap-5">
        <Text className='text-lg font-medium mb-4 text-center'>{title || 'Malang-Jogja'}</Text>
        
        <View className="justify-center items-center">
          {
            img 
            ? <View>{img}</View>
            : <Fontisto name="bus" size={48} color="#000000" />
          }
        </View>

        <TouchableOpacity className='relative bg-transparent rounded-xl overflow-hidden'>
          <View className="h-full w-full absolute bg-white backdrop-blur-sm">
          </View>

          <View className="flex-row items-center justify-center gap-4 py-2 px-4 rounded-xl">
            <Text>Selengkapnya</Text>
            <FontAwesome6 name="arrow-right-long" size={16} color="#000000" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CardBus