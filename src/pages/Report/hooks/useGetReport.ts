import { Dayjs } from 'dayjs';
import { useMemo } from 'react';
import { getReport, ReportResult } from '../../../services/getReport';

export interface UseGetReportResult {
  /** generated report */
  report: ReportResult;
  /** columns to be previewed */
  previewColumns: { dataIndex: string; title: string }[];
  /** rows to be previewed */
  previewRows: Record<string, string | number>[];
}

/** Generates the report for the selected month and users */
export const useGetReport = (
  month: Dayjs,
  names: string[]
): UseGetReportResult => {
  /** generated report */
  const report: ReportResult = useMemo(() => getReport(month, names), [
    month,
    names,
  ]);

  /** columns to be previewed */
  const previewColumns = report.headers.map((column) => ({
    dataIndex: column.key,
    title: column.label,
  }));

  /** rows to be previewed */
  const previewRows = report.data.map((row, key) => ({ ...row, key }));

  return {
    report,
    previewColumns,
    previewRows,
  };
};
