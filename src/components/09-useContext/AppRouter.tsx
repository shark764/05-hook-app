import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutScreen from './AboutScreen';
import AppNavbar from './AppNavbar';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import NotFound from './NotFound';

const AppRouter = () => (
  <Router>
    <div className="container">
      <div className="row">
        <div className="col">
          <AppNavbar />
        </div>
        <div className="col">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
);

export default AppRouter;
