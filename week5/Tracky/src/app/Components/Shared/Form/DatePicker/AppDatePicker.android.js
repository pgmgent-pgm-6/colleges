import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { format, parse } from "date-fns";
import { useFormikContext } from "formik";
import { useRef } from "react";
import { DATE_API_FORMAT } from "../../../../../core/modules/log/constants";
import AppTextField from "../AppTextField";

const AppDatePicker = (props) => {
  const { name } = props;
  const { values, setFieldValue } = useFormikContext();
  const value = values[name];
  const inputRef = useRef();

  const handleChange = (event, selectedDate) => {
    setFieldValue(name, format(selectedDate, DATE_API_FORMAT));
  };

  const handleFocus = () => {
    // blur the input field again
    inputRef.current.blur();
    // open date picker
    DateTimePickerAndroid.open({
      value: parse(value, DATE_API_FORMAT, new Date()),
      onChange: handleChange,
      mode: "date",
      is24Hour: true,
    });
  };

  return (
    <AppTextField
      value={value}
      ref={inputRef}
      onFocus={handleFocus}
      {...props}
    />
  );
};

export default AppDatePicker;
