import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate("Projects");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Page</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
