import { getProjectById } from "../../../core/modules/project/api";
import Text from "../../Components/Design/Text/Text";
import DefaultView from "../../Components/Design/View/DefaultView";
import DataView from "../../Components/Shared/Data/DataView";

const ProjectDetailScreen = ({ route }) => {
  const { id } = route.params;

  return (
    <DataView
      name={["projects", id]}
      method={() => getProjectById(id)}
      titleKey="name"
      render={(project) => {
        return (
          <DefaultView>
            <Text>{project.name}</Text>
            <Text>Client {project.client.name}</Text>
          </DefaultView>
        );
      }}
    />
  );
};

export default ProjectDetailScreen;
