import { View, StyleSheet } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { HomeProp } from "../navigation/AppStack";

const HomeScreen = ({ navigation }: HomeProp) => {
  return (
    <View style={styles.root}>
      {
        <HomeHeader
          onLogout={() => {
            navigation.navigate("Login");
          }}
        />
      }
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {},
});
