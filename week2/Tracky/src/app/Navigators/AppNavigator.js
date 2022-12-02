import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigation } from "../../core/navigation";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import LogsScreen from "../Screens/Logs/LogsScreen";
import ProjectsScreen from "../Screens/Projects/ProjectsScreen";
import SettingsScreen from "../Screens/Settings/SettingsScreen";
import { DefaultNavigatorOptions, Variables } from "../style";
import ProjectNavigator from "./ProjectNavigator";

const getTabIcon = (name, focused) => {
  let icon = "";
  switch (name) {
    case Navigation.LOGS:
      icon = "home";
      break;
    case Navigation.PROJECTS:
      icon = "folder";
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
        tabBarActiveBackgroundColor: Variables.colors.white,
        tabBarInactiveBackgroundColor: Variables.colors.white,
        ...DefaultNavigatorOptions.screenOptions,
      })}
    >
      <Tab.Screen name={Navigation.LOGS} component={LogsScreen} />
      <Tab.Screen
        name={Navigation.PROJECTS}
        component={ProjectNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name={Navigation.SETTINGS} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
