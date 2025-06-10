import type { RecordData } from '../types/RecordData';
import { useFieldsConfig } from '../services/useFieldsConfig';

const TableRow = ({ data }: { data: RecordData }) => {
  
  const { mapFields, length } = useFieldsConfig()

  console.log(data);
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))`,
      }}
      className="grid h-full"
    >
      {mapFields(({name}) => (
        <div
          key={name}
          className="truncate px-2 h-full bg-gray-300 even:bg-gray-400 max-w-[400px]  hover:bg-gray-100 cursor-default transition-colors duration-300"
        >
          {data[name]}
        </div>
      ))}
    </div>
  );
};

export default TableRow;
