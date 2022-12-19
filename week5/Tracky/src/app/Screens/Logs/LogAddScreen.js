import { useQueryClient } from "@tanstack/react-query";
import { createLog } from "../../../core/modules/log/api";
import DefaultView from "../../Components/Design/View/DefaultView";
import LogForm from "../../Components/Shared/Log/LogForm";

const LogAddScreen = ({ navigation, route }) => {
  const { date } = route.params;
  const queryClient = useQueryClient();

  const handleSuccess = () => {
    queryClient.invalidateQueries(["logs"]);
    navigation.goBack();
  };

  return (
    <DefaultView>
      <LogForm
        updateMethod={createLog}
        onSuccess={handleSuccess}
        initialValues={{ date: date }}
        label="Create"
      />
    </DefaultView>
  );
};

export default LogAddScreen;
