import { View, Text, StyleSheet } from "react-native";
import React from "react";

const explore = () => {
  return (
    <View style={styles.container}>
      <Text>explore</Text>
    </View>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
