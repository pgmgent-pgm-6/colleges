import { format, parse } from "date-fns";
import padTime from "../../utils/padTime";
import { DATE_API_FORMAT } from "./constants";

const formatTimeToString = (minutes, separator = ":") => {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;

  return `${padTime(hours)}${separator}${padTime(min)}`;
};

const formatDate = (date) => {
  // parse to JS date
  date = parse(date, DATE_API_FORMAT, new Date());

  if (format(date, DATE_API_FORMAT) === format(new Date(), DATE_API_FORMAT)) {
    return "Today";
  } else if (format(date, "yyyy") === format(new Date(), "yyyy")) {
    return format(date, "dd/MM");
  } else {
    return format(date, "dd/MM/yyyy");
  }
};

export { formatDate, formatTimeToString };
