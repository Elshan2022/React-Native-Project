import { View, Text, Dimensions, StyleSheet } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get("window").width;

const HomeScreen = () => {
  return <View style={styles.root}>{<HomeHeader />}</View>;
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {},
});
