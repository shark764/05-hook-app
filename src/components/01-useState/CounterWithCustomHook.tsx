import useCounter from '@/hooks/useCounter';

const CounterWithCustomHook = () => {
  const { state: counter, increment, decrement, reset } = useCounter(100);

  const handleIncrement = () => {
    increment(2);
  };
  const handleDecrement = () => {
    decrement(4);
  };

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h1>Counter with hooks: {counter}</h1>

      <hr />

      <button
        type="button"
        onClick={handleIncrement}
        className="btn btn-secondary">
        +2
      </button>
      <button
        type="button"
        onClick={handleDecrement}
        className="btn btn-secondary">
        -4
      </button>
      <button type="button" onClick={reset} className="btn btn-warning">
        Reset
      </button>
    </div>
  );
};

export default CounterWithCustomHook;
