import { Input } from 'antd';
import { Dayjs } from 'dayjs';
import { ChangeEvent, FC } from 'react';
import DatePickerDayjs from '../../../components/DatePickerDayjs';
import { ReportDownload } from '../../../components/ReportDownload';
import { DEFAULT_PICKER_GRANULARITY } from './constants';
import { ConfigPanelProps } from './interfaces';
import { SpaceStyled } from './styles';
import { FileOutlined } from '@ant-design/icons';
import { useState } from 'react';

/**
 * Configuration of the report panel
 */
export const ConfigPanel: FC<ConfigPanelProps> = ({
  data,
  headers,
  month,
  setMonth,
}) => {
  const [file, setFile] = useState<string>(month.format('Отчет_MMMM'));

  const onMonthChange = (v: Dayjs | null) => v && setMonth(v);

  const onFileNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.value || '');
  };

  return (
    <SpaceStyled>
      <DatePickerDayjs
        value={month}
        onChange={onMonthChange}
        picker={DEFAULT_PICKER_GRANULARITY}
      />
      <Input
        value={file}
        onChange={onFileNameChange}
        prefix={<FileOutlined />}
        placeholder='File name'
        addonAfter='.csv'
      />
      {data ? (
        <ReportDownload filename={file} data={data} headers={headers} />
      ) : (
        'No report'
      )}
    </SpaceStyled>
  );
};
