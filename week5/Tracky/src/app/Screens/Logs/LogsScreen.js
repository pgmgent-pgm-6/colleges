import { useEffect, useState } from "react";
import { getLogsByDate } from "../../../core/modules/log/api";
import ListItem from "../../Components/Design/List/ListItem";
import DefaultView from "../../Components/Design/View/DefaultView";
import DataListView from "../../Components/Shared/Data/DataListView";
import { format } from "date-fns";
import { DATE_API_FORMAT } from "../../../core/modules/log/constants";
import DateHeaderPicker from "../../Components/Shared/Log/DateHeaderPicker";
import { Navigation } from "../../../core/navigation";
import { formatTimeToString } from "../../../core/modules/log/utils";
import HeaderButton from "../../Components/Design/Button/HeaderButton";

const LogsScreen = ({ navigation }) => {
  const [date, setDate] = useState(format(new Date(), DATE_API_FORMAT));

  const handleAddItem = () => {
    navigation.navigate(Navigation.LOGS_CREATE, {
      date: date,
    });
  };

  const handleItemPress = (log) => {
    navigation.navigate(Navigation.LOGS_UPDATE, {
      id: log.id,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButton title="Add log" icon="plus" onPress={handleAddItem} />
      ),
    });
  }, [navigation, date]);

  return (
    <DefaultView padding={false}>
      <DateHeaderPicker date={date} onDateChange={setDate} />
      <DataListView
        name={["logs", date]}
        method={() => getLogsByDate(date)}
        emptyIcon="clock-time-two"
        emptyTitle="Geen logs"
        emptyDescription="Je hebt nog geen logs voor deze dag. Voeg nu je eerste log toe."
        onAddItem={handleAddItem}
        renderItem={({ item }) => (
          <ListItem
            title={item.comment}
            description={`${item.project.name} - ${item.project.client.name}`}
            right={formatTimeToString(item.time)}
            onPress={() => handleItemPress(item)}
          />
        )}
      />
    </DefaultView>
  );
};

export default LogsScreen;
