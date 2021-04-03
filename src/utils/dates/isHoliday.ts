import { Dayjs } from 'dayjs';

export const isHoliday = (date: Dayjs) => date.day() === 0 || date.day() === 6;
