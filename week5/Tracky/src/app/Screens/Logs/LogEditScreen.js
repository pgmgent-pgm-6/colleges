import { useQueryClient } from "@tanstack/react-query";
import LogForm from "../../Components/Shared/Log/LogForm";
import { getLogById, updateLog } from "../../../core/modules/log/api";
import DefaultView from "../../Components/Design/View/DefaultView";
import DataView from "../../Components/Shared/Data/DataView";

const prepareValues = (log) => {
  const { project, ...rest } = log;
  return rest;
};

const LogEditScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const queryClient = useQueryClient();

  const handleSuccess = () => {
    queryClient.invalidateQueries(["logs"]); // multiple at once to be sure
    navigation.goBack();
  };

  return (
    <>
      <DataView
        name={["logs", id]}
        method={() => getLogById(id)}
        render={(log) => {
          return (
            <DefaultView>
              <LogForm
                updateMethod={updateLog}
                initialValues={{ ...prepareValues(log) }}
                onSuccess={handleSuccess}
                label="Update"
              />
            </DefaultView>
          );
        }}
      />
    </>
  );
};

export default LogEditScreen;
