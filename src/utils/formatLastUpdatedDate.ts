import {
  format,
  differenceInHours,
  differenceInDays,
  isToday,
  isYesterday,
} from "date-fns";

export const formatLastUpdatedDate = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);
  const now = new Date();

  const hoursDiff = differenceInHours(now, date);
  const daysDiff = differenceInDays(now, date);

  if (hoursDiff < 1) {
    return "Just now";
  }

  if (isToday(date)) {
    return `${hoursDiff} hour${hoursDiff !== 1 ? "s" : ""} ago`;
  }

  if (isYesterday(date)) {
    return "Yesterday";
  }

  if (daysDiff < 7) {
    return `${daysDiff} day${daysDiff !== 1 ? "s" : ""} ago`;
  }

  return format(date, "MMM d, yyyy");
};
