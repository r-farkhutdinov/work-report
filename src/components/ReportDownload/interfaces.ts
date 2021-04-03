import { Data, Headers } from 'react-csv/components/CommonPropTypes';

export interface ReportDownloadProps {
  data: string | Data;
  headers?: Headers;
}
