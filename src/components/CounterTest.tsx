
import { useState } from 'react';
import styles from './CounterTest.module.css';

import { useCounterStore } from '~/store/useCounterStore';

function CounterTest() {
  const counterStore = useCounterStore();

  return (
    <div className={styles['App']}>
        
        <div className='text-center text-2xl'>
          Count is 
          <div className='my-3 p-2 text-5xl'>
              {counterStore.count}
          </div>
        </div>

        <button className={styles['button']} onClick={() => counterStore.increase()}>
          +
        </button>
        <button className={styles['button']} onClick={() => counterStore.decrease()}>
          -
        </button>
        
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
    </div>
  );
}

export default CounterTest;
