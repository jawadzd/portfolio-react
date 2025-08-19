import { useState } from "react";

export default function App() {
  const [n, setN] = useState(0);

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Tailwind v3 Test</h1>
        <button
          onClick={() => setN((x) => x + 1)}
          className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition"
        >
          Clicked {n} times
        </button>
        <p className="text-sm text-slate-300">If you see a dark page + indigo button, it works.</p>
      </div>
    </main>
  );
}
