import { useEffect } from "react";
import { getProjects } from "../../../core/modules/project/api";
import { Navigation } from "../../../core/navigation";
import HeaderButton from "../../Components/Design/Button/HeaderButton";
import ListItem from "../../Components/Design/List/ListItem";
import DataListView from "../../Components/Shared/Data/DataListView";

const ProjectsScreen = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.push(Navigation.PROJECTS_DETAIL, {
      id: item.id,
    });
  };

  const handleAddItem = () => {
    navigation.push(Navigation.PROJECTS_CREATE);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() => navigation.navigate(Navigation.PROJECTS_CREATE)}
          title="Add project"
          icon="plus"
        />
      ),
    });
  }, [navigation]);

  return (
    <DataListView
      name={["projects"]}
      method={getProjects}
      emptyTitle="Geen projecten"
      emptyDescription="Je hebt nog geen projecten."
      emptyIcon="folder"
      onAddItem={handleAddItem}
      renderItem={({ item }) => (
        <ListItem title={item.name} onPress={() => handlePress(item)} />
      )}
    />
  );
};

export default ProjectsScreen;
