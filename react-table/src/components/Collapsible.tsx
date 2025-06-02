import { useState } from "react";

const Collapsible = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 text-left font-semibold bg-slate-200 hover:bg-slate-300 transition"
      >
        {title} {isOpen ? "▲" : "▼"}
      </button>

      {isOpen && (
        <div className="p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible