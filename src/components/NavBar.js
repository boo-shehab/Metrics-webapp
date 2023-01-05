import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav className="navbar">
      <ul className="links">
        <li>
          <Link to="/" className={`link ${pathname === '/' ? 'active' : ''}`}>
            Rockets
          </Link>
        </li>
        <li>
          <Link to="/missions" className={`link ${pathname === '/missions' ? 'active' : ''}`}>
            Messions
          </Link>
        </li>
        <li>
          <Link to="/profile" className={`link ${pathname === '/profile' ? 'active' : ''}`}>
            My Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
