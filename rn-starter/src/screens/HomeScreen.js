import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <View>
      <Text style={styles.text}>Manoj Silag</Text>
      <Button
        style={styles.button}
        title="Go to Components Demo"
        onPress={() => navigate("Components")}
      />

      <Button
        style={styles.button}
        title="Go to List Demo"
        onPress={() => navigate("List")}
      />

      <Button
      style={styles.button}
      title="Go to Image Demo"
      onPress={() => navigate("Image")}
    />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "blue",
    textAlign: "center"
  },
  button: {
    margin: "20px",
    backgroundColor:"pink"
  }
});

export default HomeScreen;
