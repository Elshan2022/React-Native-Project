import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Splash: undefined;
};

export type HomeProp = NativeStackScreenProps<RootStackParamList, "Home">;
export type LoginProp = NativeStackScreenProps<RootStackParamList, "Login">;
export type SplashProb = NativeStackScreenProps<RootStackParamList, "Splash">;

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
