import { useState } from 'react';
import CounterTest from './components/CounterTest';

function App() {
  return (
    <>
      <main className="mx-auto max-w-[780px] p-5">
        <h1 className="text-center text-4xl">Vite + React + TS + Tailwind</h1>
        <CounterTest />
      </main>
    </>
  );
}

export default App;
