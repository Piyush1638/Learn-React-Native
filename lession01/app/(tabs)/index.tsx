import { View, Text, StyleSheet } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lession 01</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
