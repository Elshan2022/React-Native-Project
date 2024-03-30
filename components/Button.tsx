import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

interface IButton {
  title: string;
  onPressed: () => void;
}

const CustomButton = (props: IButton) => {
  return (
    <TouchableOpacity onPress={props.onPressed}>
      <View style={styles.button}>
        <Text style={styles.loginText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#6c25be",
    height: 60,
    borderRadius: 20,
    marginTop: 60,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});
