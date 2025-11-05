import React from 'react';
import { Pencil, Trash2, Sparkles, List } from 'lucide-react';

const TypeBadge = ({ type }) => {
  const base = 'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium';
  const styles = {
    Polished: 'bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100',
    Bullets: 'bg-sky-50 text-sky-700 ring-1 ring-sky-100',
    Summary: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100',
  };
  const iconMap = {
    Polished: Sparkles,
    Bullets: List,
    Summary: Sparkles,
  };
  const Icon = iconMap[type] || Sparkles;
  return (
    <span className={`${base} ${styles[type] || 'bg-slate-50 text-slate-700 ring-1 ring-slate-100'}`}>
      <Icon className="h-3.5 w-3.5" />
      {type}
    </span>
  );
};

const ActionButton = ({ label, Icon, onClick, tone = 'neutral' }) => {
  const tones = {
    neutral: 'text-slate-600 hover:bg-slate-50',
    danger: 'text-rose-600 hover:bg-rose-50',
  };
  return (
    <button
      aria-label={label}
      onClick={onClick}
      className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition ${
        tones[tone] || tones.neutral
      }`}
    >
      <Icon className="h-4 w-4" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

const CategoriesTable = ({ data = [], onEdit, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200">
          <thead className="bg-slate-50">
            <tr>
              <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">User Email</th>
              <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Name</th>
              <th className="hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 md:table-cell">Description</th>
              <th className="hidden px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600 lg:table-cell">Summarization Prompt</th>
              <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">Type</th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {data.map((row, idx) => (
              <tr key={row.id} className="odd:bg-slate-50/40 hover:bg-indigo-50/40">
                <td className="px-4 py-3 align-top">
                  <div className="text-sm font-medium text-slate-900">{row.userEmail}</div>
                  <div className="text-xs text-slate-500 md:hidden">{row.description}</div>
                </td>
                <td className="px-4 py-3 align-top">
                  <div className="text-sm font-medium capitalize text-slate-900">{row.name}</div>
                  <div className="text-xs text-slate-500 lg:hidden">{row.prompt}</div>
                </td>
                <td className="hidden px-4 py-3 align-top text-sm text-slate-700 md:table-cell">{row.description}</td>
                <td className="hidden px-4 py-3 align-top text-sm text-slate-700 lg:table-cell">{row.prompt}</td>
                <td className="px-4 py-3 align-top">
                  <TypeBadge type={row.type} />
                </td>
                <td className="px-4 py-3 align-top">
                  <div className="flex justify-end gap-2">
                    <ActionButton label="Edit" Icon={Pencil} onClick={() => onEdit(row)} />
                    <ActionButton label="Delete" Icon={Trash2} tone="danger" onClick={() => onDelete(row)} />
                  </div>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-sm text-slate-500">
                  No categories match the selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesTable;
