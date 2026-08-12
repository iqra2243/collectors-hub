import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/marketplace" className="logo">
          Collector's Hub
        </NavLink>

        <div className="nav-links">
          <NavLink
            to="/marketplace"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Marketplace
          </NavLink>

          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            Community
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            My Collection
          </NavLink>

          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
          >
            {dark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;