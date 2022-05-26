import { useState } from 'react';
import './counter.css';

const CounterApp = () => {
  const [counter, setCounter] = useState<Record<string, number>>({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const handleCounterInc = () => {
    setCounter((c) => ({
      ...c,
      counter1: c.counter1 + 1,
    }));
  };

  const { counter1, counter2 } = counter;
  console.log(
    'file: CounterApp.tsx ~ line 20 ~ CounterApp ~ counter1, counter2',
    counter1,
    counter2
  );

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      {Object.keys(counter).map((c, i) => (
        <h1 key={c}>{`Counter${i + 1} ${counter[c]}`}</h1>
      ))}

      <hr />

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleCounterInc}>
        +1
      </button>
    </div>
  );
};

export default CounterApp;
