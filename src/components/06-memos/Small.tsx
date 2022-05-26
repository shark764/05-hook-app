import { memo } from 'react';

interface Props {
  value: number;
}

const Small = ({ value }: Props) => {
  console.log('I was called again :(');

  return <small>{value}</small>;
};

export default memo(Small);
