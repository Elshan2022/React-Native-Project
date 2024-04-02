import { useState } from "react";
import CustomTextInput from "../components/TextInput";
import CustomHeader from "../components/Header";
import { View, StyleSheet, ToastAndroid } from "react-native";
import LoginAnimation from "../components/LoginAnimation";
import CustomButton from "../components/Button";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { login } from "../service/LoginService";
import { saveToken } from "../cache/TokenCache";
import { LoginProp } from "../navigation/AppStack";


const LoginScreen = ({ navigation }: LoginProp) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [isValidEmail, onEmailError] = useState(true);
  const [isValidPassword, onPasswordError] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /.{8,}/;

  const emailValidation = (email: string) => {
    if (emailRegex.test(email)) {
      onEmailError(true);
    } else {
      onEmailError(false);
    }
  };

  const passwordValidation = (password: string) => {
    if (passwordRegex.test(password)) {
      onPasswordError(true);
    } else {
      onPasswordError(false);
    }
  };

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.LONG);
  };

  return (
    <View style={styles.container}>
      <CustomHeader title="Login Page" />
      {<LoginAnimation />}
      {
        <CustomTextInput
          placeholder="Email"
          onChangeText={(value) => {
            onChangeEmail(value);
            emailValidation(value);
          }}
          errorMessage={isValidEmail ? "" : "Please check your email"}
        />
      }
      {
        <CustomTextInput
          placeholder="Password"
          secureText={true}
          onChangeText={(value) => {
            passwordValidation(value);
            onChangePassword(value);
          }}
          errorMessage={
            isValidPassword ? "" : "Must be at least one uppercase and number"
          }
        />
      }

      {
        <CustomButton
          title="Login"
          onPressed={async () => {
            if (isValidEmail && isValidPassword) {
              try {
                const response = await login({ email, password });
                const token = response["token"] as string;
                saveToken(token);
                showToast("You logged successfully");
                navigation.navigate("Home");
              } catch (error) {
                showToast(`${error}`);
              }
            }
          }}
        />
      }

      <StatusBar style="auto" />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
});
