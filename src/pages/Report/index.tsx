import { Table } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { ConfigPanel } from './ConfigPanel';
import { ReportContentStyled, ReportTitleStyled } from './styles';
import namesJSON from '../../names.json';
import { Names } from './Names';
import { useGetReport } from './hooks/useGetReport';

/**
 * Root component of the report page
 */
const Report: React.FC = () => {
  /** current month */
  const [month, setMonth] = useState(dayjs());

  /** names list to be included in the report */
  const [names, setNames] = useState<string[]>(namesJSON);

  const {
    report: { data, headers },
    previewColumns,
    previewRows,
  } = useGetReport(month, names);

  return (
    <ReportContentStyled>
      <ReportTitleStyled>Report configuration</ReportTitleStyled>
      <ConfigPanel
        data={data}
        headers={headers}
        month={month}
        setMonth={setMonth}
      />
      <ReportTitleStyled>Names to include</ReportTitleStyled>

      <Names names={namesJSON} setNames={setNames} />
      <ReportTitleStyled>Preview</ReportTitleStyled>
      <Table
        size='small'
        columns={previewColumns}
        dataSource={previewRows}
        pagination={false}
      />
    </ReportContentStyled>
  );
};

export default Report;
