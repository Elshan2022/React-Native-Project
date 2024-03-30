import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

type THeader = {
  title: string;
};

const CustomHeader = (props: THeader) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title} </Text>
    </View>
  );
};

export default CustomHeader;

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6c25be",
    height: 80,
    width: screenWidth,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },
});
