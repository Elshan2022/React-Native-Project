import * as SecureStore from "expo-secure-store";

enum TokenEnum {
  TOKEN = "token",
}
export const saveToken = (token?: string) => {
  try {
    if (token !== null) {
      SecureStore.setItem(TokenEnum.TOKEN, token!);
    }
  } catch (error) {
    throw Error("Something went wrong while saving token");
  }
};

export const getToken = async () => {
  const token = await SecureStore.getItemAsync(TokenEnum.TOKEN);
  return token;
};

export const deleteToken = async () => {
  try {
    await SecureStore.deleteItemAsync(TokenEnum.TOKEN);
    console.log("Token deleted");
  } catch (error) {
    throw Error("Something went wrong while deleting token");
  }
};
