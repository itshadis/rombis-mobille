import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (text: string) => void;
}

const Input = ({ label, placeholder, value, onChange } : InputProps) => {
  return (
    <View className='bg-neutral-200 rounded-lg pl-2'>
      <Text className='text-neutral-400 text-sm font-medium pt-2'>{label}</Text>
      <TextInput 
        value={value} 
        placeholder={placeholder} 
        onChangeText={onChange} 
        className='h-10'
      />
    </View>
  )
}

export default Input