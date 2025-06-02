import type { RecordData } from "../types/RecordData"

type field = {
    name: keyof RecordData,
    type: string,
    placeholder: string
}

//предполагается что имена уникальные и не будет двух полей почта или чего то такого
//меняет всю таблицу и форму делая количество рядов динамическим
//требует изменения RecordData

const fieldsConfig: field[] = [
    {name: 'name', type: 'text', placeholder: "Имя"},
    {name: 'age', type: 'number', placeholder: "Возраст"},
    {name: 'address', type: 'text', placeholder: "Адресс"},
    {name: 'phone', type: 'text', placeholder: "Телефон"},
    {name: 'email', type: 'text', placeholder: "Почта"},
    {name: 'country', type: 'text', placeholder: "Страна"},
]



export default fieldsConfig 