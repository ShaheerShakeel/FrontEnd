import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import App from "./App";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  card: {
    width: 300,
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
  },
  carImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  carInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  carName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  carPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const AutospectraCarCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.carImage}
          source={require("./car_image.jpg")}
        />
        <View style={styles.carInfo}>
          <Text style={styles.carName}>Toyota Camry</Text>
          <Text style={styles.carPrice}>$20,000</Text>
        </View>
      </View>
    </View>
  );
};

/*
import AutospectraCarCard from "D:\Desktop\FYP\FYP_Logo\Without_Background\AutoSpectra.png";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AutospectraCarCard />
      // ...
    </View>
  );
};

export default AutospectraCarCard;

*/


export default App;

