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
import CustomModal from "./Modal";
import { useState } from "react";
import { deleteToken } from "../cache/TokenCache";

const width = Dimensions.get("window").width;

interface IHomeHeader {
  onLogout: () => void;
}

const HomeHeader = (prob: IHomeHeader) => {
  const [isVisible, setVisible] = useState(false);
  const toggleVisibility = () => setVisible(!isVisible);

  return (
    <View style={styles.header}>
      <View style={styles.headerComponents}>
        <Text style={styles.title}>Recipe finder</Text>
        <View style={styles.logoContainer}>
          <TouchableOpacity
            onPress={() => {
              toggleVisibility();
            }}
          >
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
      <CustomModal
        alertMessage="Do you want to log out ?"
        onCancel={() => {
          setVisible(false);
        }}
        onConfirm={async () => {
          await deleteToken();
          prob.onLogout();
        }}
        isVisible={isVisible}
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
