
import { useState } from 'react';
import CounterTest from './components/CounterTest';

function App() {

  return (
    <>
      <main className='max-w-[780px] mx-auto p-5'>
        <h1 className="text-4xl text-center">Vite + React + TS + Tailwind</h1>
        <CounterTest />
      </main>
    </>
  );
}

export default App;
