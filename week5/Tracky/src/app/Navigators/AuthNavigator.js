import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import LoginScreen from "../Screens/Auth/LoginScreen";
import RegisterScreen from "../Screens/Auth/RegisterScreen";
import { DefaultNavigatorOptions } from "../style";

const Stack = createNativeStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    <Stack.Screen
      component={LoginScreen}
      name={Navigation.LOGIN}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      component={RegisterScreen}
      name={Navigation.REGISTER}
      options={{
        title: "Create new account",
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
