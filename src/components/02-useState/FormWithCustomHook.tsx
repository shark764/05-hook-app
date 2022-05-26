import { FormEvent, useEffect } from 'react';
import useForm from '@/hooks/useForm';

interface FormState {
  name: string;
  email: string;
  password: string;
}

const defaultFormState = {
  name: '',
  email: '',
  password: '',
};

const FormWithCustomHook = () => {
  const [formState, handleInputChange, resetForm] = useForm(defaultFormState);

  const { name, email, password } = formState as FormState;

  useEffect(() => {
    console.log('hey!');

    return () => {
      console.log('goodbye!');
    };
  }, []);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log('Submitted', formState);
  };

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <form onSubmit={handleSubmit}>
        <h1>Form With Custom Hook</h1>
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

        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="your password..."
            autoComplete="off"
            value={password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Send
        </button>
        <button type="button" className="btn btn-secondary" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default FormWithCustomHook;
