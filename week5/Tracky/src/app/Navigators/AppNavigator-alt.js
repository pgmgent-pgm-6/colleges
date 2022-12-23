import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigation } from "../../core/navigation";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import { DefaultNavigatorOptions, Variables } from "../style";
import { StatusBar } from "expo-status-bar";
import LogsScreen from "../Screens/Logs/LogsScreen";
import ProjectsScreen from "../Screens/Projects/ProjectsScreen";
import ClientsScreen from "../Screens/Clients/ClientsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../Screens/Settings/SettingsScreen";
import { createClientSubScreens } from "./ClientNavigator";
import { createProjectSubScreens } from "./ProjectNavigator";
import { createLogSubScreens } from "./LogNavigator";
import { createSettingSubScreens } from "./SettingsNavigator";

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

const TabNavigator = () => {
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
        ...DefaultNavigatorOptions.screenOptions,
      })}
    >
      <Tab.Screen
        name={Navigation.LOGS}
        component={LogsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={Navigation.PROJECTS}
        component={ProjectsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={Navigation.CLIENTS}
        component={ClientsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={Navigation.SETTINGS}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

const AppNavigator = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <Stack.Navigator {...DefaultNavigatorOptions}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        {createClientSubScreens(Stack, navigation)}
        {createProjectSubScreens(Stack, navigation)}
        {createLogSubScreens(Stack, navigation)}
        {createSettingSubScreens(Stack, navigation)}
      </Stack.Navigator>
      <StatusBar style="light" />
    </>
  );
};

export default AppNavigator;
