import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Navbar({ navigation }) {
  const handleLogout = () => {
    navigation.navigate("Landing");
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>Projects</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    backgroundColor: "#d1d1d1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  logout: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4287f5",
  },
});
