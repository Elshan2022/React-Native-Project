import { View, ActivityIndicator, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { SplashProb } from "../navigation/AppStack";
import { getToken } from "../cache/TokenCache";

const SplashScreen = ({ navigation }: SplashProb) => {
  const checkToken = async () => {
    try {
      const token = await getToken();
      if (token !== null) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Login");
      }
    } catch (error) {
      navigation.navigate("Login");
    }
  };

  useEffect(() => {
    checkToken();
  });

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
