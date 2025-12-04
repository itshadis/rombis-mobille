import { formatIdDate } from '@/utils/date'
import DateTimePicker from '@react-native-community/datetimepicker'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface DateTimePickerProps {
  label?: string,
  value?: string,
  onChange?: (date: Date) => void
}

const DateTimePickerComponent = ({ label, value, onChange } : DateTimePickerProps) => {
  const dateValue = value ? new Date(value) : new Date()
  const [showPicker, setShowPicker] = useState(false)

  return (
    <View className='bg-neutral-200 rounded-lg h-16 pt-2 pl-2'>
      <Text className='text-neutral-400 text-sm font-medium'>{label}</Text>
      
      <TouchableOpacity  
        className='h-9 justify-center'
        onPress={() => setShowPicker(true)}
      >
        <Text className='ml-1'>{formatIdDate(dateValue, true)}</Text>
      </TouchableOpacity>

      {
        showPicker && (
          <DateTimePicker
            value={new Date(dateValue)}
            display='default'
            onChange={(event, selectedDate) => {
              console.log(selectedDate)
              if (selectedDate  && onChange) {
                onChange(selectedDate)
              }
              setShowPicker(false)
            }}
          />
        )
      }
    </View>
  )
}

export default DateTimePickerComponent