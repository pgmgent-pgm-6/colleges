import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import HeaderButton from "../Components/Design/Button/HeaderButton";
import LogAddScreen from "../Screens/Logs/LogAddScreen";
import LogEditScreen from "../Screens/Logs/LogEditScreen";
import LogsScreen from "../Screens/Logs/LogsScreen";
import { DefaultNavigatorOptions } from "../style";

const Stack = createNativeStackNavigator();
const LogNavigator = () => {
  return (
    <Stack.Navigator {...DefaultNavigatorOptions}>
      <Stack.Screen
        name={Navigation.LOGS_OVERVIEW}
        component={LogsScreen}
        options={{
          title: "Logs",
          headerRight: () => <HeaderButton icon="plus" title="Add log" />,
        }}
      />
      <Stack.Screen
        name={Navigation.LOGS_CREATE}
        component={LogAddScreen}
        options={{
          title: "Add log",
        }}
      />
      <Stack.Screen
        name={Navigation.LOGS_UPDATE}
        component={LogEditScreen}
        options={{
          title: "Edit log",
          headerRight: () => (
            <HeaderButton title="Delete log" icon="trash-can" />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default LogNavigator;
