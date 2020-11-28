import React from 'react';
import { View, Text, StyleSheet, Image} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {

    return ( <View>
        <ImageDetail title="Forest" score={8} image={require("../../assets/forest.jpg")}/>
        <ImageDetail title="Beach" score={8} image={require("../../assets/beach.jpg")}/>
        <ImageDetail title="Mountain" score={9} image={require("../../assets/mountain.jpg")}/>
        </View> );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: "blue",
        textAlign: "center"
      }
})
 
export default ImageScreen;