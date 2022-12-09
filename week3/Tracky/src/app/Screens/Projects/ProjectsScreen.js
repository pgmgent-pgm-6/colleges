import { useEffect, useState } from "react";
import { View } from "react-native";
import { useQuery } from "react-query";
import { getProjects } from "../../../core/modules/project/api";
import { Navigation } from "../../../core/navigation";
import Button from "../../Components/Design/Button/Button";
import LoadingIndicator from "../../Components/Design/Loading/LoadingIndicator";
import ErrorMessage from "../../Components/Design/Text/ErrorMessage";
import Text from "../../Components/Design/Text/Text";

const ProjectsScreen = ({ navigation }) => {
  const { data, isLoading, error, isError } = useQuery("projects", getProjects);

  const handlePress = () => {
    navigation.navigate(Navigation.PROJECTS_CREATE);
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (isError) {
    return <ErrorMessage error={error} />;
  }

  const { data: projects } = data;

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
