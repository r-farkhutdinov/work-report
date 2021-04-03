import { Dayjs } from 'dayjs';

/**
 * Checks if a day is a holiday
 * @param date date to check
 * @returns true if holiday
 */
export const isHoliday = (date: Dayjs): boolean =>
  date.day() === 0 || date.day() === 6;
