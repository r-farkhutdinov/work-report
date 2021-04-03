import { DatePicker } from 'antd';
import { FC } from 'react';
import { ReportDownload } from '../../../components/ReportDownload';
import { DEFAULT_PICKER_GRANULARITY } from './constants';
import { ConfigPanelProps } from './interfaces';
import { SpaceStyled } from './styles';

export const ConfigPanel: FC<ConfigPanelProps> = ({ data, headers }) => {
  return (
    <SpaceStyled>
      <DatePicker picker={DEFAULT_PICKER_GRANULARITY} />
      <ReportDownload data={data} headers={headers} />
    </SpaceStyled>
  );
};
