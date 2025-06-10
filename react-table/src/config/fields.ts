import type { RecordConfig } from '../types/RecordConfig';

//предполагается что имена уникальные и не будет двух полей почта или чего то такого
//меняет всю таблицу и форму делая количество рядов динамическим
//полностью зависим от RecordData добавление поле в RecordData оюязывает добавить конфиг для него
//в id нет прямой необходимости, но можно использовать в key при генерации jsx через mapFields в useFieldsConfig
//используется через хук useFieldsConfig

const fieldsConfig: RecordConfig = {
  'name': { id: 0, type: 'text', placeholder: 'Имя' },
  'age': { id: 2, type: 'number', placeholder: 'Возраст' },
  'phone': { id: 3, type: 'text', placeholder: 'Телефон' },
  'email': { id: 4, type: 'text', placeholder: 'Почта' },
  'address': { id: 5, type: 'text', placeholder: 'Адресс' },
};

export default fieldsConfig;
