import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../theme/colors/colors";

interface ITitle {
  title: string;
}

const TitleContainer: React.FC<ITitle> = ({ title }) => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.content}>{title}</Text>
    </View>
  );
};

export default TitleContainer;

const styles = StyleSheet.create({
  titleContainer: {
    padding: 7,
    backgroundColor: colors.primary,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    marginTop: 15,
    marginBottom: 10,
  },
  content: {
    fontSize: 20,
    color: colors.white,
    fontWeight: "600",
  },
});
