import { Table } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { getReport, ReportResult } from '../../services/getReport';

import { ConfigPanel } from './ConfigPanel';
import { ReportContentStyled, ReportTitleStyled } from './styles';
import namesJSON from '../../names.json';
import { Names } from './Names';
import { useMemo } from 'react';

const Report: React.FC = () => {
  const [month, setMonth] = useState(dayjs());

  const [names, setNames] = useState<string[]>(namesJSON);

  const report: ReportResult = useMemo(() => getReport(month, names), [
    month,
    names,
  ]);

  const previewColumns = report.headers.map((column) => ({
    dataIndex: column.key,
    title: column.label,
  }));

  const previewRows = report.data.map((row, key) => ({ ...row, key }));

  console.log(previewRows);

  return (
    <ReportContentStyled>
      <ReportTitleStyled>Report configuration</ReportTitleStyled>
      <ConfigPanel
        data={report?.data}
        headers={report?.headers}
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
