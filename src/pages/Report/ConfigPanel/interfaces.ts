import { Data, Headers } from 'react-csv/components/CommonPropTypes';

export interface ConfigPanelProps {
  data: string | Data;
  headers?: Headers;
}
