import { useQueryClient } from "@tanstack/react-query";
import LogForm from "../../Components/Shared/Log/LogForm";
import { getLogById, updateLog } from "../../../core/modules/log/api";
import DefaultView from "../../Components/Design/View/DefaultView";
import DataView from "../../Components/Shared/Data/DataView";
import { useEffect, useState } from "react";
import HeaderButton from "../../Components/Design/Button/HeaderButton";
import DeleteLogDialog from "../../Components/Shared/Log/Delete/DeleteLogDialog";

const prepareValues = (log) => {
  const { project, ...rest } = log;
  return rest;
};

const LogEditScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const queryClient = useQueryClient();
  const [showDelete, setShowDelete] = useState(false);

  const handleSuccess = () => {
    queryClient.invalidateQueries(["logs"]); // multiple at once to be sure
    navigation.goBack();
  };

  const handleDelete = () => {
    queryClient.invalidateQueries(["logs"]); // multiple at once to be sure
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() => setShowDelete(true)}
          title="Delete log"
          icon="trash-can"
        />
      ),
    });
  }, [navigation]);

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
      {showDelete && (
        <DeleteLogDialog
          id={id}
          onDismiss={() => setShowDelete(false)}
          onDelete={handleDelete}
        />
      )}
    </>
  );
};

export default LogEditScreen;
