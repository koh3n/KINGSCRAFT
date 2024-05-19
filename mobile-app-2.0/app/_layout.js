import Slot from "expo-router/Slot";
import { View, Text } from "react-native";

// Import your global CSS file
import "../global.css";

export default function _layout() {
  return (
    <View>
      <Slot />
    </View>
  );
}
