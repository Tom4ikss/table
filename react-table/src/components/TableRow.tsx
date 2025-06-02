import fieldsConfig from '../config/fields';
import type { RecordData } from '../types/RecordData';

const TableRow = ({ data }: { data: RecordData }) => {
  console.log(data);
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${fieldsConfig.length}, minmax(0, 1fr))`,
      }}
      className="grid h-full"
    >
      {fieldsConfig.map((field) => (
        <div
          key={field.name}
          className="truncate px-2 h-full bg-gray-300 even:bg-gray-400 max-w-[400px]  hover:bg-gray-100 cursor-default transition-colors duration-300"
        >
          {data[field.name]}
        </div>
      ))}
    </div>
  );
};

export default TableRow;
