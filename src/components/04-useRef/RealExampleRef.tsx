import { useState } from 'react';
import MultipleCustomHook from '../03-examples/MultipleCustomHook';

const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  const handleToggleShow = () => {
    setShow((isShown) => !isShown);
  };

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <hr />
      <h1 className="text-center">Real Example Ref</h1>
      <hr />

      <button
        type="button"
        className="btn btn-primary"
        onClick={handleToggleShow}>
        Toggle
      </button>

      {show && <MultipleCustomHook />}
    </div>
  );
};

export default RealExampleRef;
