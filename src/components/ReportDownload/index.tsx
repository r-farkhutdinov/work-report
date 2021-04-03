import { FC } from 'react';
import { CSVLink } from 'react-csv';
import { ReportDownloadProps } from './interfaces';

export const ReportDownload: FC<ReportDownloadProps> = ({ data, headers }) => {
  return (
    <CSVLink data={data} headers={headers}>
      Download report
    </CSVLink>
  );
};
