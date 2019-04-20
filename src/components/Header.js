import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

const Header = () => {
  return (
    <header className={styles.root}>
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <Link to="/">Home</Link>
        </div>
        <div className={styles.navItem}>
          <Link to="/about">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
