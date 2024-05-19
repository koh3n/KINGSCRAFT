import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Navbar({ navigation }) {
  const handleLogout = () => {
    navigation.navigate("Landing");
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Navbar</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    backgroundColor: "#eee",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
});
