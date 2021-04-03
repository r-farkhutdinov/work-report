import { Dayjs } from 'dayjs';
import { getDatesInRange } from '../utils/dates/getDatesInRange';
import { isHoliday } from '../utils/dates/isHoliday';

const MONTH = 'month';
const DAY_FORMAT = 'DD';
const SYMBOL_PRESENT = '+';
const SYMBOL_ABSENT_OFF = 'x';

export interface ReportResult {
  /** generated rows */
  data: Record<string, string>[];
  /** generated columns */
  headers: { label: string; key: string }[];
  /** dates in range of the month */
  dates: Dayjs[];
}

/** return the report based on month and names list */
export const getReport = (month: Dayjs, names: string[]): ReportResult => {
  const startOf = month.startOf(MONTH).toDate();
  const endOf = month.endOf(MONTH).toDate();

  const dates = getDatesInRange(startOf, endOf);

  const headers = [
    { label: 'Name', key: 'name' },
    ...dates.map((date) => ({
      label: date.format(DAY_FORMAT),
      key: date.format(DAY_FORMAT),
    })),
  ];

  const data: Record<string, string>[] = names.map((name) => ({ name }));

  data.forEach((row) => {
    for (let date of dates) {
      row[date.format(DAY_FORMAT)] = isHoliday(date)
        ? SYMBOL_ABSENT_OFF
        : SYMBOL_PRESENT;
    }
  });

  return {
    data,
    headers,
    dates,
  };
};
