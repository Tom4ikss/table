import { useFieldsConfig } from '../services/useFieldsConfig';

const TableHeader = () => {

  const {mapFields, length} = useFieldsConfig()

  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${length}, minmax(0, 1fr))`,
      }}
      className="grid bg-slate-800 text-slate-50 font-semibold text-left uppercase tracking-wider select-none"
    >
      {mapFields(({id, placeholder}) => (
        <h2 className="truncate px-4 py-4" key={id}>
          {placeholder}
        </h2>
      ))}
    </div>
  );
};

export default TableHeader;
