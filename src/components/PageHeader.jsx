import React from 'react';
import { Plus } from 'lucide-react';

const PageHeader = ({ onNew }) => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Email Categories</h1>
        <p className="mt-1 text-sm text-slate-600">
          Manage categories, summarization prompts, and templates for system communications.
        </p>
      </div>
      <div>
        <button
          onClick={onNew}
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <Plus className="h-4 w-4" />
          New Category
        </button>
      </div>
    </div>
  );
};

export default PageHeader;
