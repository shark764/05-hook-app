import { memo } from 'react';

interface Props {
  increment: (factor?: number) => void;
}

const ShowIncrement = ({ increment }: Props) => {
  const handleClick = () => {
    increment(5);
  };

  console.log('I was generated again :(');

  return (
    <button type="button" className="btn btn-primary" onClick={handleClick}>
      Increment
    </button>
  );
};

export default memo(ShowIncrement);
