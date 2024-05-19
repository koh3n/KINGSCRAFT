import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function BottomBar({ navigation }) {
  const handleOpenCamera = () => {
    navigation.navigate("Camera");
  };

  return (
    <View style={styles.bottombar}>
      <TouchableOpacity onPress={handleOpenCamera}>
        <Image
          source={require("../assets/images/camera.png")}
          style={styles.camera}
        />
      </TouchableOpacity>
      {/* <Button title="Camera" onPress={handleOpenCamera} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  bottombar: {
    height: 50,
    backgroundColor: "#d1d1d1",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width: 80,
    height: 80,
    marginBottom: 70,
  },
});
