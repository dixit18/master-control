import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import registry from '../REGISTRY.json';

export default function App() {
  const [q, setQ] = useState('');
  const apps = registry.apps.filter((a) => a.slug.includes(q.toLowerCase()));
  useEffect(() => { document.title = 'Master Control — Studio'; }, []);
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4 sm:p-8">
      <header className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-end gap-3 justify-between">
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold">Studio Master Control</h1>
          <p className="text-zinc-400 text-sm sm:text-base">6 apps · status · features · marketing · R&D → Design → Build → Test</p>
        </div>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="filter slug…" className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 w-full sm:w-64" />
      </header>
      <main className="max-w-6xl mx-auto grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((a, i) => (
          <motion.a key={a.slug} href={a.repo} target="_blank" rel="noreferrer"
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="block bg-zinc-900 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-600">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">{a.slug}</h2>
              <span className="text-xs bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 rounded-full px-2 py-1">{a.status}</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">db: {a.db} · theme: {a.theme}</p>
            <p className="text-sm text-zinc-300 mt-3">marketing: {a.marketing}</p>
            <p className="text-xs text-zinc-500 mt-3 break-all">{a.repo}</p>
          </motion.a>
        ))}
      </main>
      <footer className="max-w-6xl mx-auto text-xs text-zinc-500 mt-8">P1 R&D done. Next: P2 tweakcn theme per app. See /docs.</footer>
    </div>
  );
}
