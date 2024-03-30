import { StyleSheet, TextInput, View, Text } from "react-native";

interface ITextInput {
  placeholder: string;
  onChangeText: (value: string) => void;
  secureText?: boolean;
  errorMessage?: string;
}

const CustomTextInput = (props: ITextInput) => {
  return (
    <View>
      <TextInput
        placeholder={props.placeholder}
        style={styles.input}
        placeholderTextColor="black"
        secureTextEntry={props.secureText || false}
        onChangeText={props.onChangeText}
      />
      <Text style={styles.errorText}>{props.errorMessage}</Text>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  errorText: {
    color: "#F60C0C",
    fontSize: 12,
    marginLeft: 16,
    marginTop: -10,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 10,
    borderColor: "#6c25be",
    fontSize: 14,
  },
});
