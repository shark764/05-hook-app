import { useMemo, useState } from 'react';
import { heavyProcess } from '@/helpers/heavyProcess';
import useCounter from '@/hooks/useCounter';

const MemoHook = () => {
  const [show, setShow] = useState(true);
  const { state: counter, increment } = useCounter(100);

  const handleIncrement = () => {
    increment();
  };
  const handleToggleShow = () => {
    setShow((isShown) => !isShown);
  };

  const memoHeavyProc = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h3>Memo Hook</h3>
      <h4>
        Counter <small>{counter}</small>
      </h4>
      <hr />

      <p>{memoHeavyProc}</p>

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

export default MemoHook;
