import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

const AutospectraHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Autospectra</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={styles.image} source={require("./image.png")} />
        <Text>Welcome to Autospectra!</Text>
      </View>
    </View>
  );
};

export default AutospectraHeader; 

