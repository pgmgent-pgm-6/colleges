import { getClients } from "../../../core/modules/client/api";
import ListItem from "../../Components/Design/List/ListItem";
import DataListView from "../../Components/Shared/Data/DataListView";

const ClientsScreen = ({ navigation }) => {
  return (
    <DataListView
      name="clients"
      method={getClients}
      emptyTitle="Geen klanten"
      emptyDescription="Je hebt nog geen klanten."
      emptyIcon="briefcase-account"
      onAddItem={() => {}}
      renderItem={({ item }) => (
        <ListItem title={item.name} onPress={() => {}} />
      )}
    />
  );
};

export default ClientsScreen;
