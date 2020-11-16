import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = "Manoj silag";

  return (
    <View>
      <Text style={styles.text}>Getting started </Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
    color: "red",
    textAlign: "center"
  },
  subHeaderStyle: {
    fontSize: 20,
    color: "blue",
  }
});

export default ComponentScreen;
