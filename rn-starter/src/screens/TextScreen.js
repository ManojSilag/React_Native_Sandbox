import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function TextScreen() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
        onChangeText={(newValue) => setText(newValue)}
      />
      <Text>My name is {text}</Text>

      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {password.length < 5 && <Text>Password must be 5 characters Long</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 15,
  },
});
