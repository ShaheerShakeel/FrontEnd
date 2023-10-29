import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
});

const AutospectraMain = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Autospectra</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "blue" }} />
      </View>
    </View>
  );
};

export default AutospectraMain;

