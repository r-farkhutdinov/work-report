import { FC } from 'react';
import { CSVLink } from 'react-csv';
import { ReportDownloadProps } from './interfaces';

export const ReportDownload: FC<ReportDownloadProps> = ({
  data,
  headers,
  filename,
}) => {
  return (
    <CSVLink filename={filename} data={data} headers={headers}>
      Download report
    </CSVLink>
  );
};
