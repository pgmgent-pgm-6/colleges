import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigation } from "../../core/navigation";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import LogsScreen from "../Screens/Logs/LogsScreen";
import { DefaultNavigatorOptions, Variables } from "../style";
import ProjectNavigator from "./ProjectNavigator";
import ClientNavigator from "./ClientNavigator";
import { StatusBar } from "expo-status-bar";
import SettingsNavigator from "./SettingsNavigator";

const getTabIcon = (name, focused) => {
  let icon = "";
  switch (name) {
    case Navigation.LOGS:
      icon = "home";
      break;
    case Navigation.PROJECTS:
      icon = "folder";
      break;
    case Navigation.CLIENTS:
      icon = "briefcase-account";
      break;
    case Navigation.SETTINGS:
      icon = "cog";
      break;
  }

  return focused ? icon : `${icon}-outline`;
};

const AppNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => (
            <Icons
              name={getTabIcon(route.name, focused)}
              size={size}
              color={color}
            />
          ),
          tabBarActiveTintColor: Variables.colors.primary,
          tabBarInactiveTintColor: Variables.colors.gray,
          ...DefaultNavigatorOptions.screenOptions,
        })}
      >
        <Tab.Screen name={Navigation.LOGS} component={LogsScreen} />
        <Tab.Screen
          name={Navigation.PROJECTS}
          component={ProjectNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={Navigation.CLIENTS}
          component={ClientNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={Navigation.SETTINGS}
          component={SettingsNavigator}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
      <StatusBar style="light" />
    </>
  );
};

export default AppNavigator;
