import { addDays, format, parse } from "date-fns";
import { StyleSheet, View } from "react-native";
import { DATE_API_FORMAT } from "../../../../core/modules/log/constants";
import { formatDate } from "../../../../core/modules/log/utils";
import { Variables } from "../../../style";
import IconButton from "../../Design/Button/IconButton";
import Text from "../../Design/Text/Text";

// method to add a certain day offset (e.g. -1 or +1 day) to a date string. Returns a date string
const getDateWithOffset = (date, offset) => {
  // parse string date to JS date and add -1 or +1 day
  const newDay = addDays(parse(date, DATE_API_FORMAT, new Date()), offset);
  // format date back to date string
  return format(newDay, DATE_API_FORMAT);
};

const DateHeaderPicker = ({ date, onDateChange }) => {
  const handlePrevDayPress = () => {
    onDateChange(getDateWithOffset(date, -1));
  };

  const handleNextDayPress = () => {
    onDateChange(getDateWithOffset(date, 1));
  };

  return (
    <View style={styles.container}>
      <IconButton
        color={Variables.colors.white}
        icon="arrow-left-drop-circle-outline"
        onPress={handlePrevDayPress}
      />
      <Text style={styles.text}>{formatDate(date)}</Text>
      <IconButton
        color={Variables.colors.white}
        icon="arrow-right-drop-circle-outline"
        onPress={handleNextDayPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Variables.colors.primary900,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Variables.sizes.horizontalPadding,
    paddingVertical: Variables.sizes.small,
  },
  text: {
    flex: 1,
    textAlign: "center",
    color: Variables.colors.white,
  },
});

export default DateHeaderPicker;
