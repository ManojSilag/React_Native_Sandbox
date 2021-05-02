import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [search, setSearch] = useState("");

  return (
    <View>
      <SearchBar 
      value={search} 
      SetValue={setSearch} 
      onTermSubmit={() => console.log('sub mit')}/>
      <Text>{search}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
