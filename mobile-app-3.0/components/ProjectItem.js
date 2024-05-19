import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProjectItem({ imageUrl, name }) {
  console.log("ProjectItem Props:", { imageUrl, name });
  return (
    <View style={styles.item}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 120,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 5,
    textAlign: "center",
  },
});
