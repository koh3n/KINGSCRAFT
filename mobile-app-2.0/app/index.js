import { View, Text } from "react-native";
import React from "react";
import { styled } from "nativewind";

const StyledText = styled(Text);

export default function Home() {
  return (
    <View>
      <StyledText className="text-red-500">Home</StyledText>
    </View>
  );
}
