import React, { useMemo, useState } from 'react';
import PageHeader from './components/PageHeader';
import Tabs from './components/Tabs';
import FilterBar from './components/FilterBar';
import CategoriesTable from './components/CategoriesTable';

const SEED = [
  {
    id: '1',
    userEmail: 'alex@acme.co',
    name: 'social',
    description: 'Social notifications from platforms and communities',
    prompt: 'Rewrite in a polished tone with 1-paragraph summary.',
    type: 'Polished',
  },
  {
    id: '2',
    userEmail: 'sara@newsly.io',
    name: 'newsletters',
    description: 'Newsletter digests and editorial updates',
    prompt: 'Summarize into 3-5 concise bullet points.',
    type: 'Bullets',
  },
  {
    id: '3',
    userEmail: 'alex@acme.co',
    name: 'transactions',
    description: 'Receipts, invoices, and order confirmations',
    prompt: 'Provide a concise summary with key amounts and dates.',
    type: 'Summary',
  },
  {
    id: '4',
    userEmail: 'terry@contoso.com',
    name: 'promotions',
    description: 'Promotional campaigns and offers',
    prompt: 'Bullet highlights with any time-limited callouts.',
    type: 'Bullets',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState('categories');
  const [userFilter, setUserFilter] = useState('all');
  const [rows, setRows] = useState(SEED);

  const users = useMemo(() => {
    const unique = Array.from(new Set(rows.map((r) => r.userEmail)));
    return [{ value: 'all', label: 'All Users' }, ...unique.map((u) => ({ value: u, label: u }))];
  }, [rows]);

  const filtered = useMemo(() => {
    if (userFilter === 'all') return rows;
    return rows.filter((r) => r.userEmail === userFilter);
  }, [rows, userFilter]);

  const handleNew = () => {
    // Demo add – in a real app this would open a modal
    const id = String(rows.length + 1);
    const demo = {
      id,
      userEmail: 'new.user@example.com',
      name: 'custom',
      description: 'Custom category example just added',
      prompt: 'Polished, 1 paragraph with key callouts.',
      type: 'Polished',
    };
    setRows([demo, ...rows]);
  };

  const handleEdit = (row) => {
    // Demo inline edit – toggles type to show interactivity
    const nextType = row.type === 'Polished' ? 'Bullets' : row.type === 'Bullets' ? 'Summary' : 'Polished';
    setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, type: nextType } : r)));
  };

  const handleDelete = (row) => {
    setRows((prev) => prev.filter((r) => r.id !== row.id));
  };

  const tabs = [
    { value: 'categories', label: 'Categories' },
    { value: 'groups', label: 'Email Groups' },
    { value: 'mapping', label: 'Mapping' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader onNew={handleNew} />

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
            <FilterBar value={userFilter} options={users} onChange={setUserFilter} />
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-white to-slate-50 p-4 shadow-sm ring-1 ring-slate-200">
            {activeTab === 'categories' && (
              <CategoriesTable data={filtered} onEdit={handleEdit} onDelete={handleDelete} />
            )}
            {activeTab === 'groups' && (
              <div className="grid place-items-center rounded-xl border border-dashed border-slate-200 bg-white py-16 text-center text-slate-500">
                Email Groups will appear here.
              </div>
            )}
            {activeTab === 'mapping' && (
              <div className="grid place-items-center rounded-xl border border-dashed border-slate-200 bg-white py-16 text-center text-slate-500">
                Mapping configuration will appear here.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
