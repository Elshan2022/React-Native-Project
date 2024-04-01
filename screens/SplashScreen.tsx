import { View, ActivityIndicator, StyleSheet } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#6c25be" size={50} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
