import fieldsConfig from "../config/fields"
import type { mapFieldsCallback } from "../types/mapFieldsCallback";


function isKeyOf<T extends object>(
  key: string | number | symbol,
  obj: T
): key is keyof T {
  return key in obj;
}

export const useFieldsConfig = () => {

    const length = Object.keys(fieldsConfig).length

    const mapFields = <U>(cb: mapFieldsCallback<U>) => {
        const res = []
        for(const key in fieldsConfig) {
            if(isKeyOf(key, fieldsConfig)) {
                res.push(cb({name: key, ...fieldsConfig[key]}))
            }
        }
        return res
    }

    return {fieldsConfig, mapFields, length}
}

