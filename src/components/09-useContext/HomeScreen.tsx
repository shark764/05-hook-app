import { useContext } from 'react';
import { ContextProps, UserContext } from './UserContext';

const HomeScreen = () => {
  const { authUser, setAuthUser } = useContext(UserContext) as ContextProps;

  const handleSignOut = () => {
    setAuthUser(null);
  };

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h3>Home</h3>
      <hr />

      <pre className="container">{JSON.stringify(authUser, null, 4)}</pre>

      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default HomeScreen;
