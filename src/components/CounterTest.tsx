import { useState } from 'react';
import styles from './CounterTest.module.css';

import { useCounterStore } from '~/store/useCounterStore';

function CounterTest() {
  const counterStore = useCounterStore();

  return (
    <div className={styles['App']}>
      <div className="my-3 p-2 text-center text-2xl">
        Count is
        <div className="text-center text-5xl">{counterStore.count}</div>
      </div>

      <p className="text-center">
        <button className={styles['button']} onClick={() => counterStore.increase()}>
          +
        </button>
        <button className={styles['button']} onClick={() => counterStore.decrease()}>
          -
        </button>
      </p>

      <p className="my-5 text-center">
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
  );
}

export default CounterTest;
