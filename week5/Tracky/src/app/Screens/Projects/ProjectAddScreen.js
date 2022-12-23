import { useQueryClient } from "@tanstack/react-query";
import { createProject } from "../../../core/modules/project/api";
import isVoid from "../../../core/utils/isVoid";
import DefaultView from "../../Components/Design/View/DefaultView";
import ProjectForm from "../../Components/Shared/Project/ProjectForm";

const ProjectAddScreen = ({ route, navigation }) => {
  const clientId = route.params?.clientId;
  const queryClient = useQueryClient();

  const handleSuccess = ({ data }) => {
    queryClient.invalidateQueries(["projects"]);
    // also refresh client with that id (e.g. for detail screen)
    queryClient.invalidateQueries(["clients", [data.client_id]]);
    navigation.goBack();
  };

  return (
    <DefaultView>
      <ProjectForm
        updateMethod={createProject}
        onSuccess={handleSuccess}
        initialValues={!isVoid(clientId) ? { client_id: clientId } : null}
        options={{ showClient: isVoid(clientId) }}
        label="Create"
      />
    </DefaultView>
  );
};

export default ProjectAddScreen;
