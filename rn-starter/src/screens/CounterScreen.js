import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { counter: state.counter + 1 };
    case "DEC":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  
  return (
    <View>
      <Button title="Increase" onPress={() => dispatch({ type: "INC" })} />
      <Button title="Decrease" onPress={() => dispatch({ type: "DEC" })} />
      <Text>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "blue",
    textAlign: "center",
  },
});

export default CounterScreen;
