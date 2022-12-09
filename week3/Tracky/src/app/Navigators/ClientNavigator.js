import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import ClientsScreen from "../Screens/Clients/ClientsScreen";
import { DefaultNavigatorOptions } from "../style";

const Stack = createNativeStackNavigator();
const ClientNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator {...DefaultNavigatorOptions}>
      <Stack.Screen
        name={Navigation.CLIENTS_OVERVIEW}
        component={ClientsScreen}
        options={{
          title: "Clients",
        }}
      />
    </Stack.Navigator>
  );
};

export default ClientNavigator;
