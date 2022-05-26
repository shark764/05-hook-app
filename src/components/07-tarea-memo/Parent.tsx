import { useCallback, useState } from 'react';
import Child from './Child';

const numbers = [2, 4, 6, 8, 10];

const Parent = () => {
  const [value, setValue] = useState(0);

  const increment = useCallback((num: number) => {
    setValue((v) => v + num);
  }, []);

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h1>Parent</h1>
      <p> Total: {value} </p>

      <hr />

      {numbers.map((n) => (
        <Child key={n.toString()} number={n} increment={increment} />
      ))}
      {/* <Child /> */}
    </div>
  );
};

export default Parent;
