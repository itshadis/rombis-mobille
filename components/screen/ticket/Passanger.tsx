import CardTicket from '@/components/card/CardTicket';
import React from 'react';
import { FlatList, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const data = Array.from({ length: 10 }, (_, i) =>({
  id: i + 1,
  jamBerangkat: "15.50",
  jamSampai: "15.00",
  from: "Grogol",
  to: "Solo",
  tipe: 22,
  trayek: "Handoyo Via Semarang",
  stops: 3,
  totalKursi: 20,
  sisaKursi: 20,
  harga: "Rp250.000 - Rp350.000",
}))
const PassangerScreen = () => {
  const inset = useSafeAreaInsets()

  return (
    <View className='mt-2'>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          rowGap: 12,
          paddingBottom: inset.bottom,
        }}
        renderItem={({ item }) => (
          <CardTicket data={item} />
        )}
      />
    </View>
  )
}

export default PassangerScreen