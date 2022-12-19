import ClientForm from "../../Components/Shared/Client/ClientForm";
import { useQueryClient } from "@tanstack/react-query";
import { createClient } from "../../../core/modules/client/api";
import DefaultView from "../../Components/Design/View/DefaultView";

const ClientAddScreen = ({ navigation }) => {
  const queryClient = useQueryClient();

  const handleSuccess = () => {
    queryClient.invalidateQueries(["clients"]);
    navigation.goBack();
  };

  return (
    <DefaultView>
      <ClientForm
        updateMethod={createClient}
        onSuccess={handleSuccess}
        label="Create"
      />
    </DefaultView>
  );
};

export default ClientAddScreen;
