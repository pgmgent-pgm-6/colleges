import { format, parse } from "date-fns";
import padTime from "../../utils/padTime";
import { DATE_API_FORMAT } from "./constants";

// transform e.g. 90 minutes to "01:30"
const formatTimeToString = (minutes, separator = ":") => {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;

  return `${padTime(hours)}${separator}${padTime(min)}`;
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

export { formatDate, formatTimeToString };
