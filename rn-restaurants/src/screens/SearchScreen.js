import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

const SearchScreen = () => {

  const [search, setSearch] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
      return results.filter(result =>{
        return result.price === price;
      })
  }

  return (
    <View>
      <SearchBar
        value={search}
        SetValue={setSearch}
        onTermSubmit={() => searchApi(search)}
      />
      {errorMessage ? <Text>{errorMessage}</Text>: null}
      <Text>{results.length}</Text>
      <ResultList results={filterResultsByPrice('$')} title="Cost Effective"/>
      <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
      <ResultList results={filterResultsByPrice('$$$')} title="Big Spender"/>
    </View>
  );

};

const styles = StyleSheet.create({});

export default SearchScreen;
