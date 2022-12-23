import { useQueryClient } from "@tanstack/react-query";
import { createLog } from "../../../core/modules/log/api";
import DefaultView from "../../Components/Design/View/DefaultView";
import LogForm from "../../Components/Shared/Log/LogForm";

const LogAddScreen = ({ navigation, route }) => {
  const date = route.params?.date;
  const projectId = route.params?.projectId;
  const queryClient = useQueryClient();

  const handleSuccess = ({ data }) => {
    queryClient.invalidateQueries(["logs"]);
    queryClient.invalidateQueries(["projects", data.project_id]);
    navigation.goBack();
  };

  let initialData = {};
  if (date) {
    initialData = { ...initialData, date };
  }
  if (projectId) {
    initialData = { ...initialData, projectId };
  }

  return (
    <DefaultView>
      <LogForm
        updateMethod={createLog}
        onSuccess={handleSuccess}
        initialValues={{ date: date }}
        options={projectId ? { showProject: false } : {}}
        label="Create"
      />
    </DefaultView>
  );
};

export default LogAddScreen;
