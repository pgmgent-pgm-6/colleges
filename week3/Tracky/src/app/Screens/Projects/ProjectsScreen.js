import { getProjects } from "../../../core/modules/project/api";
import { Navigation } from "../../../core/navigation";
import ListItem from "../../Components/Design/List/ListItem";
import DataListView from "../../Components/Shared/Data/DataListView";

const ProjectsScreen = ({ navigation }) => {
  return (
    <DataListView
      name={["projects"]}
      method={getProjects}
      emptyTitle="Geen projecten"
      emptyDescription="Je hebt nog geen projecten."
      emptyIcon="folder"
      onAddItem={() => {
        navigation.push(Navigation.PROJECTS_CREATE);
      }}
      renderItem={({ item }) => (
        <ListItem title={item.name} onPress={() => {}} />
      )}
    />
  );
};

export default ProjectsScreen;
