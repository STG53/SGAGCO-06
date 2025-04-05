import { View, Text, StyleSheet } from "react-native";
import React from "react";

const signIn = () => {
  return (
    <View style={styles.container}>
      <Text>sign-in</Text>
    </View>
  );
};

export default signIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
