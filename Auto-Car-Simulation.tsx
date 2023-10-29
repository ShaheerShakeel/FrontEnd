import React from "react";
import { StyleSheet, Text, View, Image, Button, ScrollView } from "react-native";

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
  scrollView: {
    flex: 1,
    width: "100%",
  },
  card: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
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
  button: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  cartIcon: {
    width: 20,
    height: 20,
  },
});

const AutospectraCarCard = ({ car }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.carImage} source={car.image} />
      <View style={styles.carInfo}>
        <Text style={styles.carName}>{car.name}</Text>
        <Text style={styles.carPrice}>${car.price}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Button
          title="Add to Cart"
          style={styles.button}
          onPress={() => {
            // Add car to cart
          }}
        />
        <Image
          style={styles.cartIcon}
          source={require("./cart_icon.png")}
        />
      </View>
    </View>
  );
};

export default AutospectraCarCard;

