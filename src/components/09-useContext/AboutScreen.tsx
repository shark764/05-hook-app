import { useContext } from 'react';
import { ContextProps, UserContext } from './UserContext';

const AboutScreen = () => {
  const { authUser } = useContext(UserContext) as ContextProps;

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h3>About</h3>
      <hr />

      <pre className="container">{JSON.stringify(authUser, null, 4)}</pre>
    </div>
  );
};

export default AboutScreen;
