import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "FNAME1", age: 1 },
    { name: "FNAME2", age: 2 },
    { name: "FNAME3", age: 3 },
    { name: "FNAME4", age: 4 },
    { name: "FNAME5", age: 5 },
    { name: "FNAME6", age: 6 },
    { name: "FNAME7", age: 7 },
    { name: "FNAME8", age: 8 },
    { name: "FNAME9", age: 9 },
    { name: "FNAME10", age: 10 },
  ];
  return (
    <FlatList
      data={friends}
      horizontal={false} // If true, renders items next to each other horizontally instead of stacked vertically.
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            Name: {item.name}, Age: {item.age}
          </Text>
        );
      }}
    >
      List Screen
    </FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
export default ListScreen;
