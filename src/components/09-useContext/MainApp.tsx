import AppRouter from './AppRouter';
import UserContextProvider from './UserContext';

const MainApp = () => (
  <div className="col-lg-4 p-2 border border-3 border-success rounded-3">
    <h3>Main App</h3>
    <hr />

    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  </div>
);

export default MainApp;
