import { FormEvent, useContext } from 'react';
import useForm from '@/hooks/useForm';
import { fakeUsers } from './fakeData';
import { ContextProps, UserContext } from './UserContext';

const LoginScreen = () => {
  const { setAuthUser } = useContext(UserContext) as ContextProps;
  const [formState, handleInputChange, resetForm, valid, setValidField] =
    useForm({
      email: '',
    });

  const { email } = formState as { email: string; };
  const { email: isEmailValid = false } = valid as {
    email: boolean;
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const emailValue = email.trim();

    if (emailValue.length === 0) {
      setValidField('email', false);
      return;
    }

    const user = fakeUsers.find((fakeUser) => fakeUser.email === emailValue);
    if (user === undefined) {
      setValidField('email', false);
      return;
    }
    setAuthUser(user);

    resetForm();
  };

  console.log(fakeUsers);

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h3>Login</h3>
      <hr />

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="your.email@company.com..."
            className={`form-control ${!isEmailValid ? 'is-invalid' : ''}`}
          />
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary my-1 form-control">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
