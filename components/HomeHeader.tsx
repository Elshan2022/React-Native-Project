import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { colors } from "../theme/colors/colors";
import Logo from "../assets/svg/logout.svg";
import CustomTextInput from "./TextInput";

const width = Dimensions.get("window").width;

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerComponents}>
        <Text style={styles.title}>Recipe finder</Text>
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={() => {}}>
            <Logo width={35} height={35} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
      <CustomTextInput
        onChangeText={(value) => {
          console.log("Search value", value);
        }}
        placeholder={"Search"}
      />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  headerComponents: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  header: {
    backgroundColor: colors.primary,
    width: width,
    height: 152,
  },
  logoutIcon: {
    color: colors.white,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.white,
  },
  logoContainer: {
    position: "absolute",
    right: 16,
  },
});
