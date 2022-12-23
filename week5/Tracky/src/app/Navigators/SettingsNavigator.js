import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import SettingsScreen from "../Screens/Settings/SettingsScreen";
import UserEditScreen from "../Screens/Settings/UserEditScreen";
import { DefaultNavigatorOptions } from "../style";

export const createSettingSubScreens = (Stack, navigation) => {
  return (
    <>
      <Stack.Screen
        component={UserEditScreen}
        name={Navigation.SETTINGS_USER_UPDATE}
        options={{
          title: "Edit profile",
        }}
      />
    </>
  );
};

const Stack = createNativeStackNavigator();
const SettingsNavigator = ({ navigation }) => (
  <Stack.Navigator {...DefaultNavigatorOptions}>
    <Stack.Screen
      component={SettingsScreen}
      name={Navigation.SETTINGS_OVERVIEW}
      options={{
        title: "Settings",
      }}
    />
    {createSettingSubScreens(Stack, navigation)}
  </Stack.Navigator>
);

export default SettingsNavigator;
