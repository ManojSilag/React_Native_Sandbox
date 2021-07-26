import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColourCounter from "../components/ColourCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "green":
        return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "blue":
        return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return;
  }
};

export default function SquareScreen() {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  return (
    <View>
      <Text>SquareScreen</Text>

      <ColourCounter
        color="Red"
        onIncrease={() => dispatch({ type: "red", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColourCounter
        color="Green"
        onIncrease={() => dispatch({ type: "green", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColourCounter
        color="Blue"
        onIncrease={() => dispatch({ type: "blue", payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT })
        }
      />

      <View
        style={{
          height: 150,
          width: "100%",
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      ></View>

      <Text>Red: {state.red}</Text>
      <Text>Green: {state.green}</Text>
      <Text>Blue: {state.blue}</Text>
    </View>
  );
}
const style = StyleSheet.create({});
