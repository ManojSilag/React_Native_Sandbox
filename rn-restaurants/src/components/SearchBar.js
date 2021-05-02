import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ value, SetValue, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.Searchicon} name="search" color="black" />
      <TextInput
        style={styles.textStyle}
        placeholder="Search"
        value={value}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newSearch) => SetValue(newSearch)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 10,
  },
  Searchicon: {
    marginHorizontal: 15,
    fontSize: 35,
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 18,
    flex: 1,
  },
});

export default SearchBar;
