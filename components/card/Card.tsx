import { ReactNode } from 'react';
import { View } from 'react-native';

interface CardProps {
  children?: ReactNode
  className?: ReactNode
}

const Card = ({ className, children }: CardProps) => {
  return (
    <View className={["w-full border border-neutral-300 rounded-md p-2", className].join(" ")}>
      {children}
    </View>
  )
}

export default Card