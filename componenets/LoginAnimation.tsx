import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

const LoginAnimation = () => {
  return (
    <View style={styles.root}>
      <LottieView
        source={require("../assets/loginAnimation.json")}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems:"center",
  },
  animation: {
    width: 200,
    height: 200,
  },
});

export default LoginAnimation;
