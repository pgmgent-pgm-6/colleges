import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../core/navigation";
import HeaderButton from "../Components/Design/Button/HeaderButton";
import ProjectAddScreen from "../Screens/Projects/ProjectAddScreen";
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
        name={Navigation.PROJECTS_CREATE}
        component={ProjectAddScreen}
        options={{
          title: "Add project",
        }}
      />
    </Stack.Navigator>
  );
};

export default ProjectNavigator;
