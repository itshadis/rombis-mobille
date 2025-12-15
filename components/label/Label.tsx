import React from "react";
import { Text, View } from "react-native";

interface ArrowLabelProps {
  label: string;
  color?: string;
  textColor?: string;
  arrowSize?: number;
  className?: string;
}

const ArrowLabel = ({
  label,
  color = "#3b82f6",
  textColor = "#fff",
  className,
}: ArrowLabelProps) => {
  return (
    <View className="flex-row items-center">
      <View
        className={`px-2 py-[2px] justify-center rounded-sm ${className ?? ""}`}
        style={{ backgroundColor: color }}
      >
        <Text
          className="text-xs"
          style={{ color: textColor }}
        >
          {label}
        </Text>
      </View>
    </View>
  );
};

export default ArrowLabel;