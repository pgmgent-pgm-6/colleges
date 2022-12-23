import { useEffect } from "react";
import { getClients } from "../../../core/modules/client/api";
import { Navigation } from "../../../core/navigation";
import HeaderButton from "../../Components/Design/Button/HeaderButton";
import ListItem from "../../Components/Design/List/ListItem";
import DataListView from "../../Components/Shared/Data/DataListView";

const ClientsScreen = ({ navigation }) => {
  const handlePress = (client) => {
    navigation.push(Navigation.CLIENTS_DETAIL, {
      id: client.id,
    });
  };

  const handleAddItem = () => {
    navigation.push(Navigation.CLIENTS_CREATE);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() => navigation.navigate(Navigation.CLIENTS_CREATE)}
          title="Add client"
          icon="plus"
        />
      ),
    });
  }, [navigation]);

  return (
    <DataListView
      name={["clients"]}
      method={getClients}
      emptyTitle="Geen klanten"
      emptyDescription="Je hebt nog geen klanten."
      emptyIcon="briefcase-account"
      onAddItem={handleAddItem}
      renderItem={({ item }) => (
        <ListItem title={item.name} onPress={() => handlePress(item)} />
      )}
    />
  );
};

export default ClientsScreen;
