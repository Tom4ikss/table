import fieldsConfig from "../config/fields"


const TableHeader = () => {
    return <div style={{ gridTemplateColumns: `repeat(${fieldsConfig.length}, minmax(0, 1fr))` }} className="grid bg-slate-800 text-slate-50 font-semibold text-left uppercase tracking-wider select-none">
        {fieldsConfig.map((field) => <h2 className="truncate px-4 py-4" key={field.name}>{field.placeholder}</h2>)}
    </div>
}

export default TableHeader