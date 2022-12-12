import { useQueryClient } from "@tanstack/react-query";
import { createProject } from "../../../core/modules/project/api";
import DefaultView from "../../Components/Design/View/DefaultView";
import ProjectForm from "../../Components/Shared/Project/ProjectForm";

const ProjectAddScreen = ({ navigation }) => {
  const queryClient = useQueryClient();

  handleSuccess = () => {
    queryClient.invalidateQueries(["projects"]);
    navigation.goBack();
  };

  return (
    <DefaultView>
      <ProjectForm
        updateMethod={createProject}
        onSuccess={handleSuccess}
        label="Create"
      />
    </DefaultView>
  );
};

export default ProjectAddScreen;
