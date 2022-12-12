import { getClients } from "../../../core/modules/client/api";
import { Navigation } from "../../../core/navigation";
import ListItem from "../../Components/Design/List/ListItem";
import DataListView from "../../Components/Shared/Data/DataListView";

const ClientsScreen = ({ navigation }) => {
  const handlePress = (client) => {
    navigation.push(Navigation.CLIENTS_DETAIL, {
      id: client.id,
    });
  };

  return (
    <DataListView
      name={["clients"]}
      method={getClients}
      emptyTitle="Geen klanten"
      emptyDescription="Je hebt nog geen klanten."
      emptyIcon="briefcase-account"
      onAddItem={() => {}}
      renderItem={({ item }) => (
        <ListItem title={item.name} onPress={() => handlePress(item)} />
      )}
    />
  );
};

export default ClientsScreen;
