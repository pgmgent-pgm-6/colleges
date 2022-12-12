import { getClientById } from "../../../core/modules/client/api";
import Text from "../../Components/Design/Text/Text";
import DefaultView from "../../Components/Design/View/DefaultView";
import DataView from "../../Components/Shared/Data/DataView";

const ClientDetailScreen = ({ route }) => {
  const { id } = route.params;

  return (
    <DataView
      name={["clients", id]}
      method={() => getClientById(id)}
      titleProp="name"
      render={(client) => {
        return (
          <DefaultView>
            <Text>{client.name}</Text>
          </DefaultView>
        );
      }}
    />
  );
};

export default ClientDetailScreen;
