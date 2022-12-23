import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import HeaderButton from "../Components/Design/Button/HeaderButton";
import ClientAddScreen from "../Screens/Clients/ClientAddScreen";
import ClientDetailScreen from "../Screens/Clients/ClientDetailScreen";
import ClientEditScreen from "../Screens/Clients/ClientEditScreen";
import ClientsScreen from "../Screens/Clients/ClientsScreen";
import { DefaultNavigatorOptions } from "../style";
import { createLogSubScreens } from "./LogNavigator";
import { createProjectSubScreens } from "./ProjectNavigator";

export const createClientSubScreens = (Stack, navigation) => {
  return (
    <>
      <Stack.Screen
        name={Navigation.CLIENTS_DETAIL}
        component={ClientDetailScreen}
        options={({ route }) => ({
          title: "",
          headerRight: () => <HeaderButton icon="pencil" title="Edit" />,
        })}
      />
      <Stack.Screen
        name={Navigation.CLIENTS_CREATE}
        component={ClientAddScreen}
        options={{
          title: "Add client",
        }}
      />
      <Stack.Screen
        name={Navigation.CLIENTS_UPDATE}
        component={ClientEditScreen}
        options={{
          title: "Edit client",
        }}
      />
    </>
  );
};

const Stack = createNativeStackNavigator();
const ClientNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator {...DefaultNavigatorOptions}>
      <Stack.Screen
        name={Navigation.CLIENTS_OVERVIEW}
        component={ClientsScreen}
        options={{
          title: "Clients",
          headerRight: () => <HeaderButton icon="plus" title="Add client" />,
        }}
      />
      {createClientSubScreens(Stack, navigation)}
      {createProjectSubScreens(Stack, navigation)}
      {createLogSubScreens(Stack, navigation)}
    </Stack.Navigator>
  );
};

export default ClientNavigator;
