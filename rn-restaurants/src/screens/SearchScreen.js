import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (search) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: search,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  };

  useEffect(() => {
    searchApi("pizza");
  }, []);

  return (
    <View>
      <SearchBar
        value={search}
        SetValue={setSearch}
        onTermSubmit={() => searchApi(search)}
      />
      {errorMessage ? <Text>{errorMessage}</Text>: null}
      <Text>{results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
