import { format, parse } from "date-fns";
import isVoid from "../../utils/isVoid";
import padTime from "../../utils/padTime";
import { DATE_API_FORMAT } from "./constants";

// transform e.g. 90 minutes to "01:30"
const formatTimeToString = (minutes, separator = ":") => {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;

  return `${padTime(hours)}${separator}${padTime(min)}`;
};

// e.g. "01:30" to 90
const parseStringToTime = (string) => {
  if (!isVoid(string)) {
    const parts = string.split(":");
    const hours =
      parts.length > 1 && !isVoid(parts[0]) ? parseInt(parts[0]) : 0;
    const minutes = Math.min(59, parseInt(parts[parts.length - 1]));

    return hours * 60 + minutes;
  } else {
    return 0;
  }
};

// format date depending on current date
const formatDate = (date) => {
  // parse to JS date
  date = parse(date, DATE_API_FORMAT, new Date());

  // show "today" if date is today
  if (format(date, DATE_API_FORMAT) === format(new Date(), DATE_API_FORMAT)) {
    return "Today";
  }
  // don't show year if current year
  if (format(date, "yyyy") === format(new Date(), "yyyy")) {
    return format(date, "dd/MM");
  }
  // all other scenario's
  return format(date, "dd/MM/yyyy");
};

export { formatDate, formatTimeToString, parseStringToTime };
