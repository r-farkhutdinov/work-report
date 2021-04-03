import { Dayjs } from 'dayjs';
import { Data, Headers } from 'react-csv/components/CommonPropTypes';

export interface ConfigPanelProps {
  data?: string | Data;
  headers?: Headers;

  month: Dayjs;
  setMonth: (month: Dayjs) => void;
}
