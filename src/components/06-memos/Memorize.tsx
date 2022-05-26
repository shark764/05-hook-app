import { useState } from 'react';
import useCounter from '@/hooks/useCounter';
import Small from './Small';

const Memorize = () => {
  const [show, setShow] = useState(true);
  const { state: counter, increment } = useCounter(10);

  const handleIncrement = () => {
    increment();
  };
  const handleToggleShow = () => {
    setShow((isShown) => !isShown);
  };

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h1>Memorize</h1>
      <h3>
        Counter:
        <Small value={counter} />
      </h3>

      <button
        type="button"
        onClick={handleIncrement}
        className="btn btn-primary">
        +1
      </button>

      <button
        type="button"
        onClick={handleToggleShow}
        className="btn btn-outline-primary ml-3">
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default Memorize;
