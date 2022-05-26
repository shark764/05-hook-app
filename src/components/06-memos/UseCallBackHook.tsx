import { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const UseCallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const increment = useCallback((factor = 1) => {
    setCounter((c) => c + factor);
  }, []);

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h1>useCallback Hook</h1>
      <hr />

      <h3>Counter: {counter}</h3>

      <ShowIncrement increment={increment} />

      <hr />
    </div>
  );
};

export default UseCallBackHook;
