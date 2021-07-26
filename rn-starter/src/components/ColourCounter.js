import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ColourCounter({ color, onIncrease, onDecrease }) {
  return (
    <View>
      <Text>{color}</Text>
      <Button 
      title={`Increase ${color}`} 
      onPress={() => onIncrease()} />
      <Button 
      title={`Decrease ${color}`} 
      onPress={() => onDecrease()} />
    </View>
  );
}

const style = StyleSheet.create({});
