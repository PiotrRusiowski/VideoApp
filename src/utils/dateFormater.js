import moment from "moment";
import { dateFormatTypes } from "../data/dateFormatTypes";

export const dateFormater = (date, formatType = dateFormatTypes.main) => {
  const formatedDate = moment(date).format(formatType);
  return formatedDate;
};
