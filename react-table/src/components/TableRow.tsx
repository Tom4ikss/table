import { useEffect, useRef, useState } from "react"
import fieldsConfig from "../config/fields"
import type { RecordData } from "../types/RecordData"






const TableRow = ({ data}: { data: RecordData}) => {

    // const fieldRef = useRef<HTMLDivElement>(null)
    // const [isTruncated, setIsTruncated] = useState(false)

    // useEffect(() => {
    //     const el = fieldRef.current
    //     if (el) {
    //     const isOverflowing = el.scrollWidth > el.clientWidth
    //     setIsTruncated(isOverflowing)
    //     }
    // }, [data])
    
    console.log(data)
    return <div style={{ gridTemplateColumns: `repeat(${fieldsConfig.length}, minmax(0, 1fr))` }} className='grid'>
        {fieldsConfig.map((field) => <div key={field.name} className="truncate px-2 py-1 bg-gray-300 even:bg-gray-400 max-w-[400px] min-w-[150px] border-b border-gray-200 hover:bg-gray-100 cursor-default transition-colors duration-300">{
        data[field.name]
        }</div>)}
    </div>
}

export default TableRow