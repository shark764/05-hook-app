import { useRef } from 'react';

const FocusScreen = () => {
  const ref = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    ref?.current?.select();
  };

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h1>Focus Screen</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="your name..."
        ref={ref}
      />

      <button
        type="button"
        className="btn btn-outline-primary mt-2"
        onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
