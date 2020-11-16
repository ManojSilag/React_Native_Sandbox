import React from "react";
import { Text, StyleSheet } from "react-native";
const HomeScreen = () => {
  return <Text style={styles.text}>Manoj Silag</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "blue",
    textAlign: "center"
  }
});

export default HomeScreen;
