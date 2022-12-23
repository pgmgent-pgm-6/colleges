import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import {
  formatTimeToString,
  parseStringToTime,
} from "../../../../core/modules/log/utils";
import TextField from "../../Design/Form/TextField";

const formatTime = (oldString, newString) => {
  if (newString.length > oldString.length) {
    newString = newString.replace(/\D+/g, "");
    if (newString.length > 2) {
      // 23350
      const before = newString.substring(0, newString.length - 2);
      const after = newString.substring(newString.length - 2, newString.length);
      return `${before}:${after}`;
    }
  }
  return newString;
};

const formatValueToTimeString = (value) => {
  return value && parseInt(value) > 0
    ? formatTimeToString(parseInt(value))
    : "";
};

const AppTimeTextField = (props) => {
  const { name } = props;
  const { values, touched, errors, setFieldValue, setFieldTouched } =
    useFormikContext();
  const value = values[name];

  const hasError = errors[name] && touched[name];

  const [time, setTime] = useState(formatValueToTimeString(value));

  const handleChangeText = (newTime) => {
    setTime(formatTime(time, newTime));
    setTimeout(() => setFieldTouched(name, true), 200); // todo: something better
  };

  const handleBlur = () => {
    setFieldValue(name, parseStringToTime(time));
  };

  useEffect(() => {
    setTime(formatValueToTimeString(value));
  }, [value]);

  return (
    <TextField
      value={time}
      onChangeText={handleChangeText}
      keyboardType="numeric"
      placeholder="00:00"
      onBlur={handleBlur}
      error={hasError ? errors[name] : ""}
      {...props}
    />
  );
};

export default AppTimeTextField;
