import { useEffect } from "react";
import { FlatList } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { getClientById } from "../../../core/modules/client/api";
import { Navigation } from "../../../core/navigation";
import HeaderButton from "../../Components/Design/Button/HeaderButton";
import Divider from "../../Components/Design/List/Divider";
import ListItem from "../../Components/Design/List/ListItem";
import ListItemButton from "../../Components/Design/List/ListItemButton";
import DefaultView from "../../Components/Design/View/DefaultView";
import ClientHeader from "../../Components/Shared/Client/List/ClientHeader";
import DataView from "../../Components/Shared/Data/DataView";

const ListType = {
  Header: "header",
  Item: "item",
  Button: "button",
};

const ClientDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const renderItem = ({ item }) => {
    if (item.type === ListType.Header) {
      return <ClientHeader client={item} />;
    } else if (item.type === ListType.Button) {
      return (
        <ListItemButton
          onPress={() => {
            navigation.navigate(Navigation.PROJECTS_CREATE, {
              clientId: id,
            });
          }}
          icon="plus"
          title="Add project"
        />
      );
    } else {
      return (
        <ListItem
          onPress={() => {
            navigation.navigate(Navigation.PROJECTS_DETAIL, {
              id: item.id,
            });
          }}
          title={item.name}
        />
      );
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() =>
            navigation.navigate(Navigation.CLIENTS_UPDATE, {
              id: id,
            })
          }
          title="Edit"
          icon="pencil"
        />
      ),
    });
  }, [navigation]);

  return (
    <DataView
      name={["clients", id]}
      method={() => getClientById(id)}
      titleKey="name"
      render={(client) => {
        return (
          <DefaultView padding={false}>
            {/* alternative: use ListHeaderComponent prop */}
            <FlatList
              ItemSeparatorComponent={() => <Divider />}
              keyExtractor={(item) =>
                item.type === ListType.Item ? item.id : item.type
              }
              data={[
                { type: ListType.Header, ...client },
                ...client.projects.map((project) => ({
                  ...project,
                  type: ListType.Item,
                })),
                { type: ListType.Button },
              ]}
              renderItem={renderItem}
            />
          </DefaultView>
        );
      }}
    />
  );
};

export default ClientDetailScreen;
