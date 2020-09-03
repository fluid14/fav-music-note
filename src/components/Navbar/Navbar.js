import React from 'react';
import cs from 'classnames';
import logo from 'assets/logo.png';
import { NavLink } from 'react-router-dom';
import routes from 'routes/routes.json';
import translate from 'translations/en.json';
import styles from './Navbar.module.sass';

const NavBar = () => (
  <nav className={cs(styles.navbar, 'wrap')}>
    <img src={logo} alt={translate.logoAlt} className={styles.logo} />
    <ul className={styles.menu}>
      <li className={styles.menuItem}>
        <NavLink className={styles.menuLink} to={routes.allAlbums}>
          {translate.menu.allAlbums}
        </NavLink>
      </li>
      <li className={styles.menuItem}>
        <NavLink className={styles.menuLink} to={routes.bestAlbums}>
          {translate.menu.bestAlbums}
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
