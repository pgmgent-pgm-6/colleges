import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import HeaderButton from "../Components/Design/Button/HeaderButton";
import ProjectAddScreen from "../Screens/Projects/ProjectAddScreen";
import ProjectDetailScreen from "../Screens/Projects/ProjectDetailScreen";
import ProjectEditScreen from "../Screens/Projects/ProjectEditScreen";
import ProjectsScreen from "../Screens/Projects/ProjectsScreen";
import { DefaultNavigatorOptions, Variables } from "../style";
import { createClientSubScreens } from "./ClientNavigator";
import { createLogSubScreens } from "./LogNavigator";

export const createProjectSubScreens = (Stack, navigation) => {
  return (
    <>
      <Stack.Screen
        name={Navigation.PROJECTS_DETAIL}
        component={ProjectDetailScreen}
        options={({ route }) => ({
          title: "",
          headerRight: () => <HeaderButton icon="pencil" title="Edit" />,
        })}
      />
      <Stack.Screen
        name={Navigation.PROJECTS_CREATE}
        component={ProjectAddScreen}
        options={{
          title: "Add project",
        }}
      />
      <Stack.Screen
        name={Navigation.PROJECTS_UPDATE}
        component={ProjectEditScreen}
        options={{
          title: "Edit project",
        }}
      />
    </>
  );
};

const Stack = createNativeStackNavigator();
const ProjectNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator {...DefaultNavigatorOptions}>
      <Stack.Screen
        name={Navigation.PROJECTS_OVERVIEW}
        component={ProjectsScreen}
        options={{
          title: "Projects",
          headerRight: () => <HeaderButton icon="plus" title="Add project" />,
        }}
      />
      {createProjectSubScreens(Stack, navigation)}
      {createLogSubScreens(Stack, navigation)}
      {createClientSubScreens(Stack, navigation)}
    </Stack.Navigator>
  );
};

export default ProjectNavigator;
