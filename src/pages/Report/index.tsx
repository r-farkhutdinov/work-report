import { DatePicker } from 'antd';
import { ReportDownload } from '../../components/ReportDownload';

const Report: React.FC = () => {
  return (
    <>
      Report
      <DatePicker />
      <ReportDownload />
    </>
  );
};

export default Report;
