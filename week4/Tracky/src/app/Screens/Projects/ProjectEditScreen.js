import ClientForm from "../../Components/Shared/Client/ClientForm";
import { useQueryClient } from "@tanstack/react-query";
import DefaultView from "../../Components/Design/View/DefaultView";
import DataView from "../../Components/Shared/Data/DataView";
import {
  getProjectById,
  updateProject,
} from "../../../core/modules/project/api";

const ProjectEditScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const queryClient = useQueryClient();

  const handleSuccess = () => {
    queryClient.invalidateQueries(["projects"]);
    navigation.goBack();
  };

  return (
    <DataView
      name={["projects", id]}
      method={() => getProjectById(id)}
      render={(project) => (
        <DefaultView>
          <ClientForm
            updateMethod={updateProject}
            initialValues={{ ...project }}
            onSuccess={handleSuccess}
            label="Update"
          />
        </DefaultView>
      )}
    />
  );
};

export default ProjectEditScreen;
