import dayjs from "dayjs";

/**
 * Returns the difference between two dates in "X weeks, Y days" format.
 * @param {Dayjs | string | Date} startDate
 * @param {Dayjs | string | Date} endDate
 * @returns {string} e.g. "2 weeks, 3 days"
 */
export const formatWeeksAndDays = () => {
  const start = dayjs();
  const end = dayjs();
  const totalDays = end.diff(start, "day");

  const weeks = Math.floor(totalDays / 7);
  const days = totalDays % 7;

  if (weeks > 0 && days > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""}, ${days} day${
      days > 1 ? "s" : ""
    }`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""}`;
  } else {
    return `${days} day${days > 1 ? "s" : ""}`;
  }
};
