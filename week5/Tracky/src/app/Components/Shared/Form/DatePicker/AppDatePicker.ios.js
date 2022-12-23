import BaseTextField from "../../../Design/Form/BaseTextField";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Variables } from "../../../../style";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import { format, parse } from "date-fns";
import { DATE_API_FORMAT } from "../../../../../core/modules/log/constants";

const AppDatePicker = (props) => {
  const { name, disabled } = props;
  const { values, setFieldValue, errors, touched } = useFormikContext();

  const value = values[name];
  const hasError = errors[name] && touched[name];

  const handleChange = (event, selectedDate) => {
    setFieldValue(name, format(selectedDate, DATE_API_FORMAT));
  };

  return (
    <BaseTextField
      {...props}
      error={hasError ? errors[name] : ""}
      backgroundStyle={styles.background}
    >
      <DateTimePicker
        value={parse(value, DATE_API_FORMAT, new Date())}
        onChange={handleChange}
        mode="date"
        display="inline"
        accentColor={Variables.colors.primary}
        textColor={Variables.colors.textColor}
        is24Hour={true}
        disabled={disabled}
      />
    </BaseTextField>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingVertical: Variables.sizes.xs,
    paddingHorizontal: Variables.sizes.xs,
  },
});

export default AppDatePicker;
