import { NavLink } from 'react-router-dom';

const AppNavbar = () => (
  <nav className="navbar bg-light">
    <div className="container-fluid">
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="login">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default AppNavbar;
