import type { RecordData } from './RecordData';

export type RecordConfig = {
  name: keyof RecordData;
  type: string;
  placeholder: string;
}[];
