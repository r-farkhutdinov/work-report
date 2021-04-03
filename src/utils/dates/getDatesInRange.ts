import dayjs, { Dayjs } from 'dayjs';

export const getDatesInRange = (start: Date, end: Date): Dayjs[] => {
  const d = new Date(start);

  const dates = [];

  while (d <= end) {
    dates.push(dayjs(new Date(d)));
    d.setDate(d.getDate() + 1);
  }

  return dates;
};
