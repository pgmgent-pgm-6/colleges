import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import SettingsScreen from "../Screens/Settings/SettingsScreen";
import UserEditScreen from "../Screens/Settings/UserEditScreen";
import { DefaultNavigatorOptions } from "../style";

const Stack = createNativeStackNavigator();
const SettingsNavigator = () => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    <Stack.Screen
      component={SettingsScreen}
      name={Navigation.SETTINGS_OVERVIEW}
      options={{
        title: "Settings",
      }}
    />
    <Stack.Screen
      component={UserEditScreen}
      name={Navigation.SETTINGS_USER_UPDATE}
      options={{
        title: "Edit profile",
      }}
    />
  </Stack.Navigator>
);

export default SettingsNavigator;
