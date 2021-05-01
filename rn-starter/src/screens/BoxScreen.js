import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// const BoxScreen = () => {
//   return (
//     <View style={styles.ViewStyle}>
//       <Text style={styles.textOneStlye}>Box Screen 1</Text>
//       <Text style={styles.textTwoStlye}>Box Screen 2</Text>
//       <Text style={styles.textThreeStlye}>Box Screen 3</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   ViewStyle: {
//     borderWidth: 3,
//     borderColor: "black",
//     // alignItems: "center",
//     // alignItems: "stretch",
//     // flexDirection: "row",
//     // justifyContent: "flex-start",
//     height: 200,
//   },
//   textOneStlye: {
//     borderWidth: 3,
//     borderColor: "red",
//     // flex:1
//   },
//   textTwoStlye: {
//     borderWidth: 3,
//     // flex: 1,
//     // alignSelf: "flex-start",
//     position: "absolute",
//     // top: 0,
//     // left: 0,
//     // right: 0,
//     // bottom: 0,
//     ...StyleSheet.absoluteFillObject,
//     borderColor: "red",
//   },
//   textThreeStlye: {
//     borderWidth: 3,
//     // flex:1,
//     borderColor: "red",
//   },
// });

//Exersice soln 1
// const styles = StyleSheet.create({
//   ViewStyle: {
//     // flexDirection: "row",
//     height: "100%",
//     width: "100%",
//   },
//   textOneStlye: {
//     backgroundColor: "red",
//     height: 75,
//     width: 75
//   },
//   textTwoStlye: {
//     backgroundColor: "green",
//     // alignSelf: "center",
//     // justifyContent: "center",
//     position: "absolute",

//     height: 75,
//     top:75,
//     left: "40%",
//     width: 75
//   },
//   textThreeStlye: {
//     backgroundColor: "blue",
//     height: 75,
//     width: 75,
//     position: "absolute",
//     top: 0,
//     right: 0
//   },
// });

//Exersice soln 2

const BoxScreen = () => {
  return (
    <View style={styles.ViewStyle}>
      <View style={styles.ViewStyle1}>
        <Text style={styles.textOneStlye}></Text>
        <Text style={styles.textTwoStlye}></Text>
      </View>
      <View style={styles.ViewStyle2}>
        <Text style={styles.textThreeStlye}></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    // height:"100%",
    // backgroundColor:"pink"
  },
  ViewStyle1: {
   flexDirection: "row",
   justifyContent:"space-between"
  },
  ViewStyle2: {
   alignItems: "center"
  },
  textOneStlye: {
    backgroundColor: "red",
    height: 75,
    width: 75,

  },
  textTwoStlye: {
    backgroundColor: "green",
    height: 75,
    width: 75,
  },
  textThreeStlye: {
    backgroundColor: "blue",
    height: 75,
    width: 75,
  },
});

export default BoxScreen;
