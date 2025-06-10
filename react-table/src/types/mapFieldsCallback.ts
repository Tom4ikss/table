import type { RecordConfig } from "./RecordConfig"

type mapFieldsData = RecordConfig[keyof RecordConfig]&{name: keyof RecordConfig}
export type mapFieldsCallback<U> = (data: mapFieldsData) => U