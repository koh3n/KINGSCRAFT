import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default function ProjectItem({ imageUrl }) {
  console.log("ProjectItem Props:", { imageUrl });
  return (
    <View style={styles.item}>
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: width / 2 - 20,
    height: width / 2 - 20,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
  },
});
