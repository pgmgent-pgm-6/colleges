import { useEffect } from "react";
import { FlatList } from "react-native";
import {
  formatDate,
  formatTimeToString,
} from "../../../core/modules/log/utils";
import { getProjectById } from "../../../core/modules/project/api";
import { Navigation } from "../../../core/navigation";
import HeaderButton from "../../Components/Design/Button/HeaderButton";
import Divider from "../../Components/Design/List/Divider";
import ListItem from "../../Components/Design/List/ListItem";
import ListItemButton from "../../Components/Design/List/ListItemButton";
import DefaultView from "../../Components/Design/View/DefaultView";
import DataView from "../../Components/Shared/Data/DataView";
import ProjectHeader from "../../Components/Shared/Project/List/ProjectHeader";

const ListType = {
  Header: "header",
  Item: "item",
  Button: "button",
};

const ProjectDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;

  const renderItem = ({ item }) => {
    if (item.type === ListType.Header) {
      return <ProjectHeader project={item} />;
    } else if (item.type === ListType.Button) {
      return (
        <ListItemButton
          onPress={() => {
            navigation.navigate(Navigation.LOGS_CREATE, {
              projectId: id,
            });
          }}
          icon="plus"
          title="Add log"
        />
      );
    } else {
      return (
        <ListItem
          title={item.comment}
          description={`${formatDate(item.date)}`}
          right={formatTimeToString(item.time)}
          onPress={() => {
            navigation.navigate(Navigation.LOGS_UPDATE, {
              id: item.id,
            });
          }}
        />
      );
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton
          onPress={() =>
            navigation.navigate(Navigation.PROJECTS_UPDATE, {
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
      name={["projects", id]}
      method={() => getProjectById(id)}
      titleKey="name"
      render={(project) => {
        return (
          <DefaultView padding={false}>
            {/* alternative: use ListHeaderComponent prop */}
            <FlatList
              ItemSeparatorComponent={() => <Divider />}
              keyExtractor={(item) =>
                item.type === ListType.Item ? item.id : item.type
              }
              data={[
                { type: ListType.Header, ...project },
                ...project.logs.map((log) => ({
                  ...log,
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

export default ProjectDetailScreen;
