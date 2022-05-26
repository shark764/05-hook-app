import { ChangeEvent, useState } from 'react';

const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  const resetForm = () => {
    setValues(initialState);
  };

  return [values, handleInputChange, resetForm] as const;
};

export default useForm;
