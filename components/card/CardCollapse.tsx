import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { ReactNode, useRef, useState } from "react";
import { Animated, LayoutChangeEvent, TouchableOpacity, View } from "react-native";
import Card from "./Card";

interface CardCollapseProps {
  headerContent?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const CardCollapse = ({ headerContent, children, className }: CardCollapseProps) => {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const animation = useRef(new Animated.Value(0)).current;

  const toggle = () => {
    Animated.timing(animation, {
      toValue: expanded ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, contentHeight],
  });

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const onContentLayout = (event: LayoutChangeEvent) => {
    const h = event.nativeEvent.layout.height;
    if (h !== contentHeight) setContentHeight(h);
  };

  return (
    <Card className="p-4">
      <View className="flex-row justify-between">
        <View className="flex-1">{headerContent}</View>
      </View>
      <TouchableOpacity onPress={toggle} className="absolute z-10 top-2 right-2">
        <MaterialCommunityIcons name={expanded ? `arrow-collapse-all` : "arrow-expand-all"} size={18} color="#ababab" />
      </TouchableOpacity>

      <Animated.View
        style={{
          overflow: "hidden",
          height,
          opacity,
        }}
      >
        <View onLayout={onContentLayout} style={{ position: "absolute", opacity: 0 }}>
          {children}
        </View>

        <View>{children}</View>
      </Animated.View>
    </Card>
  );
};

export default CardCollapse;
