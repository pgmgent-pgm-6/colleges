import ClientForm from "../../Components/Shared/Client/ClientForm";
import { useQueryClient } from "@tanstack/react-query";
import { updateClient } from "../../../core/modules/client/api";
import DefaultView from "../../Components/Design/View/DefaultView";
import DataView from "../../Components/Shared/Data/DataView";

const ClientEditScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const queryClient = useQueryClient();

  const handleSuccess = () => {
    queryClient.invalidateQueries(["clients"]);
    navigation.goBack();
  };

  return (
    <DataView
      name={["clients", id]}
      method={() => getClientById(id)}
      render={(client) => (
        <DefaultView>
          <ClientForm
            updateMethod={updateClient}
            initialValues={{ ...client.data }}
            onSuccess={handleSuccess}
            label="Update"
          />
        </DefaultView>
      )}
    />
  );
};

export default ClientEditScreen;
