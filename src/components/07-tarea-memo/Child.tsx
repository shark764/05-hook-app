import { memo } from 'react';

interface Props {
  number: number;
  increment: (number: number) => void;
}

const Child = ({ number, increment }: Props) => {
  console.log('I was generated again :(');

  const handleClick = () => {
    increment(number);
  };

  return (
    <button
      type="button"
      className="btn btn-primary mx-1"
      onClick={handleClick}>
      {number}
    </button>
  );
};

export default memo(Child);
