import { ChangeEvent, useEffect, useState } from 'react';
import Message from './Message';

const defaultFormState = {
  name: '',
  email: '',
};

const SimpleForm = () => {
  const [formState, setFormState] = useState(defaultFormState);

  const { name, email } = formState;

  useEffect(() => {
    console.log('hey!');

    return () => {
      console.log('goodbye!');
    };
  }, []);

  useEffect(() => {
    console.log('hey formState changed!');
  }, [formState]);

  useEffect(() => {
    console.log('hey email changed!');
  }, [email]);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormState((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  };

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h1>UseEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="your name..."
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="your.email@mail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === '123' && <Message />}
    </div>
  );
};

export default SimpleForm;
