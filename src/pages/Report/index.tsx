import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useState } from 'react';
import { getReport, ReportResult } from '../../services/getReport';
import { getDatesInRange } from '../../utils/dates/getDatesInRange';
import { ConfigPanel } from './ConfigPanel';
import { ReportContentStyled, ReportTitleStyled } from './styles';

const headers = [
  { label: 'First Name', key: 'firstname' },
  { label: 'Last Name', key: 'lastname' },
  { label: 'Email', key: 'email' },
];

const data = [
  { firstname: 'Ahmed', lastname: 'Tomi', email: 'ah@smthing.co.com' },
  { firstname: 'Raed', lastname: 'Labes', email: 'rl@smthing.co.com' },
  { firstname: 'Yezzi', lastname: 'Min l3b', email: 'ymin@cocococo.com' },
];

const Report: React.FC = () => {
  const [month, setMonth] = useState(dayjs());

  const names = ['Ruslan Farkhutdinov', 'Ivan Ivanov'];

  const [report, setReport] = useState<ReportResult>();

  useEffect(() => {
    setReport(getReport(month, names));
  }, [month]);

  console.log(report);

  return (
    <ReportContentStyled>
      <ReportTitleStyled>Report</ReportTitleStyled>
      <ConfigPanel
        data={report?.data}
        headers={report?.headers}
        month={month}
        setMonth={setMonth}
      />
    </ReportContentStyled>
  );
};

export default Report;
