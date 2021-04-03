import { Data, Headers } from 'react-csv/components/CommonPropTypes';

export interface ReportDownloadProps {
  /** data to be processed and saved as csv */
  data: string | Data;
  /** columns of the table */
  headers?: Headers;
  /** custom file name */
  filename?: string;
}
