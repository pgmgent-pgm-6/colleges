import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import HeaderButton from "../Components/Design/Button/HeaderButton";
import ProjectAddScreen from "../Screens/Projects/ProjectAddScreen";
import ProjectDetailScreen from "../Screens/Projects/ProjectDetailScreen";
import ProjectEditScreen from "../Screens/Projects/ProjectEditScreen";
import ProjectsScreen from "../Screens/Projects/ProjectsScreen";
import { DefaultNavigatorOptions, Variables } from "../style";

const Stack = createNativeStackNavigator();
const ProjectNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator {...DefaultNavigatorOptions}>
      <Stack.Screen
        name={Navigation.PROJECTS_OVERVIEW}
        component={ProjectsScreen}
        options={{
          title: "Projects",
          headerRight: () => (
            <HeaderButton
              onPress={() => {
                navigation.navigate(Navigation.PROJECTS, {
                  screen: Navigation.PROJECTS_CREATE,
                });
              }}
              icon="plus"
              title="Add project"
            />
          ),
        }}
      />
      <Stack.Screen
        name={Navigation.PROJECTS_DETAIL}
        component={ProjectDetailScreen}
        options={({ route }) => ({
          title: "",
          headerRight: () => (
            <HeaderButton
              onPress={() => {
                navigation.navigate(Navigation.PROJECTS, {
                  screen: Navigation.PROJECTS_UPDATE,
                  params: {
                    id: route.params?.id,
                  },
                });
              }}
              icon="pencil"
              title="Edit"
            />
          ),
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
    </Stack.Navigator>
  );
};

export default ProjectNavigator;
