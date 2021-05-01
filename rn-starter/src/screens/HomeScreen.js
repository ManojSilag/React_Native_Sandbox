import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  const { navigate } = props.navigation;
  return (
    <View>
      <Text style={styles.text}>Manoj Silag</Text>
      <Button
        title="Go to Components Demo"
        color={randomRgb()}
        onPress={() => navigate("Components")}
      />

      <Button title="Go to List Demo" onPress={() => navigate("List")} />

      <Button
        title="Go to Image Demo"
        color={randomRgb()}
        onPress={() => navigate("Image")}
      />

      <Button
        title="Go to Counter Demo"
        color={randomRgb()}
        onPress={() => navigate("Counter")}
      />

      <Button
        title="Go to Color Demo"
        color={randomRgb()}
        onPress={() => navigate("Color")}
      />

      <Button
        title="Go to Square Demo"
        color={randomRgb()}
        onPress={() => navigate("Square")}
      />

      <Button
        title="Go to Text Input Demo"
        color={randomRgb()}
        onPress={() => navigate("Text")}
      />

      <Button
        title="Go to Box Demo"
        color={randomRgb()}
        onPress={() => navigate("Box")}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "blue",
    textAlign: "center",
  },
  button: {
    // marginTop: "20px",
    backgroundColor: "pink",
    // margin: '18px'
  },
});

export default HomeScreen;
