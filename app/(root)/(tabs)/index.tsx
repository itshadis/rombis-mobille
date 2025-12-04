import Form from '@/components/form'
import React, { useState } from 'react'
import { Text, View } from 'react-native'

interface IForm {
  from: string,
  to: string,
  date: string,
}

const HomeScreen = () => {
  const [form, setForm] = useState<IForm>({} as IForm)

  return (
    <View>
      <View className='p-4 gap-1'>
        <Text className='text-4xl font-medium'>Hi, User</Text>
        <Text className='text-neutral-500'>Cari Perjalanan Sekarang!</Text>
      </View>

      <View className='p-4 gap-2'>
        <Form.Input 
          label='Dari'
          value={form.from}
          onChange={(text) => setForm({...form, from: text})}
          />

        <Form.Input 
          label='Tujuan'
          value={form.to}
          onChange={(text) => setForm({...form, to: text})}
        />

        <Form.DateTimePicker 
          label='Tanggal Berangkat'
          value={form.date}
          onChange={(date) => setForm({...form, date: date.toISOString()})}
        />
      </View>
    </View>
  )
}

export default HomeScreen