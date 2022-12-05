import { useEffect, useState } from "react";
import { View } from "react-native";
import { getProjects } from "../../../core/modules/project/api";
import { Navigation } from "../../../core/navigation";
import Button from "../../Components/Design/Button/Button";
import Text from "../../Components/Design/Text/Text";

const ProjectsScreen = ({ navigation }) => {
  const [projects, setProjects] = useState();

  const handlePress = () => {
    navigation.navigate(Navigation.PROJECTS_CREATE);
  };

  useEffect(() => {
    const fetchData = async () => {
      const items = await getProjects();
      console.log(items);
      setProjects(items ? items.data : null);
    };
    fetchData();
  }, []);

  return (
    <View>
      <Text>Projects</Text>
      {projects &&
        projects.map((project) => <Text key={project.id}>{project.name}</Text>)}
      <Button onPress={handlePress}>Klik mij</Button>
    </View>
  );
};

export default ProjectsScreen;
