import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Breaking into a new dimension</Text>
      <Image
        source={require("../assets/images/landing_image.png")}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Create!"
          onPress={() => navigation.navigate("Projects")}
          color="#4287f5" // Customize the button color if needed
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d1d1d1", // Add a background color if needed
    padding: 20,
  },
  text: {
    // Elevate your 3d printing capabilities.
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: 30,
    lineHeight: 35,
    color: "black",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: "contain", // Ensure the image scales properly
    marginBottom: 30,
  },
  buttonContainer: {
    width: "80%",
    marginTop: 20,
    borderRadius: 5,
    overflow: "hidden",
  },
});
