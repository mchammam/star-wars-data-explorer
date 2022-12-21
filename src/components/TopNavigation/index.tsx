import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import ToggleColorSchemeButton from './ToggleColorSchemeButton/ToggleColorSchemeButton';

function TopNavigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const pages = [
    'films',
    'planets',
    'species',
    'people',
    'starships',
    'vehicles'
  ];

  function handleNavToggleBtnClick() {
    setNavIsOpen((prevState) => !prevState);
  }

  return (
    <header className={styles.navBar}>
      <button
        onClick={handleNavToggleBtnClick}
        className={styles.navToggleBtn}
        aria-controls="nav"
        aria-label="Menu"
        aria-expanded={navIsOpen}
      >
        <i className={styles.navToggleIcon} aria-hidden="true"></i>
      </button>

      <nav className={styles.nav} id="nav" role="list" data-visible={navIsOpen}>
        {pages.map((pageName) => (
          <NavLink
            to={`/${pageName}`}
            onClick={() => setNavIsOpen(false)}
            className={({ isActive }) =>
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
            key={pageName}
            role="listitem"
          >
            {pageName}
          </NavLink>
        ))}
      </nav>

      <ToggleColorSchemeButton />
    </header>
  );
}

export default TopNavigation;
