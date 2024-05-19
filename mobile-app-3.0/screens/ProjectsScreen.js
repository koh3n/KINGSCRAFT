import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";
import BottomBar from "../components/BottomBar";

export default function ProjectsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Projects Page</Text>
      </View>
      <BottomBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
