import { Dayjs } from 'dayjs';
import { Data, Headers } from 'react-csv/components/CommonPropTypes';

export interface ConfigPanelProps {
  /** data to be exported */
  data?: string | Data;
  /** columns of the table */
  headers?: Headers;
  /** selected month for the report */
  month: Dayjs;
  /** change function to update the selected month */
  setMonth: (month: Dayjs) => void;
}
