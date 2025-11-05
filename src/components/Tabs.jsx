import React from 'react';

const Tabs = ({ tabs = [], active, onChange }) => {
  return (
    <div className="w-full">
      <div className="inline-flex rounded-lg bg-white p-1 shadow-sm ring-1 ring-slate-200">
        {tabs.map((t) => {
          const isActive = t.value === active;
          return (
            <button
              key={t.value}
              onClick={() => onChange(t.value)}
              className={
                `relative px-4 py-2 text-sm font-medium rounded-md transition focus:outline-none ` +
                (isActive
                  ? 'bg-indigo-600 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50')
              }
            >
              {t.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
