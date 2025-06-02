import type { RecordData } from './RecordData';

export interface FetchPageResult {
  data: RecordData[];
  nextPage: number | null;
}
