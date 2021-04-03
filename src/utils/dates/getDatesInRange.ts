import dayjs, { Dayjs } from 'dayjs';

/**
 * Return the list of dates in a given range
 * @param start date
 * @param end date
 * @returns list of dates between (including) these dates
 */
export const getDatesInRange = (start: Date, end: Date): Dayjs[] => {
  const d = new Date(start);

  const dates = [];

  while (d <= end) {
    dates.push(dayjs(new Date(d)));
    d.setDate(d.getDate() + 1);
  }

  return dates;
};
