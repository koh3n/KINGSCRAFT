import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function BottomBar({ navigation }) {
  const handleOpenCamera = () => {
    navigation.navigate("Camera");
  };

  return (
    <View style={styles.bottombar}>
      <Button title="Camera" onPress={handleOpenCamera} />
    </View>
  );
}

const styles = StyleSheet.create({
  bottombar: {
    height: 50,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
});
