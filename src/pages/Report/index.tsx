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
  return (
    <ReportContentStyled>
      <ReportTitleStyled>Report</ReportTitleStyled>
      <ConfigPanel data={data} headers={headers} />
    </ReportContentStyled>
  );
};

export default Report;
