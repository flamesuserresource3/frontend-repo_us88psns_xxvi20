import React from 'react';
import { Filter } from 'lucide-react';

const FilterBar = ({ value, options = [], onChange }) => {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-slate-500" />
        <span className="text-sm font-medium text-slate-700">Filter by User</span>
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="ml-auto w-full max-w-xs rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
