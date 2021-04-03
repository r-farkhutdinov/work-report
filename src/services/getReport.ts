import { Dayjs } from 'dayjs';
import { getDatesInRange } from '../utils/dates/getDatesInRange';
import { isHoliday } from '../utils/dates/isHoliday';

const MONTH = 'month';

export interface ReportResult {
  data: Record<string, string>[];
  headers: { label: string; key: string }[];
  dates: Dayjs[];
}

export const getReport = (month: Dayjs, names: string[]): ReportResult => {
  const startOf = month.startOf(MONTH).toDate();
  const endOf = month.endOf(MONTH).toDate();

  const dates = getDatesInRange(startOf, endOf);

  const headers = [
    { label: 'Name', key: 'name' },
    ...dates.map((date) => ({
      label: date.format('DD'),
      key: date.format('DD'),
    })),
  ];

  const data: Record<string, string>[] = names.map((name) => ({ name }));

  data.forEach((row) => {
    for (let date of dates) {
      row[date.format('DD')] = isHoliday(date) ? 'x' : '+';
    }
  });

  return {
    data,
    headers,
    dates,
  };
};
