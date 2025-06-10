import type { RecordData } from './RecordData';

export type RecordConfig = Record<keyof RecordData, {id: number, type: string, placeholder: string}>
