import React from 'react';
import cs from 'classnames';
import logo from 'assets/logo.png';
import { NavLink } from 'react-router-dom';
import routes from 'routes/routes.json';
import SwitchLang from 'components/SwitchLang/SwitchLang';
import { LanguageContextConsumer } from 'context/LanguageContext';
import styles from './Navbar.module.sass';

const NavBar = () => {
  return (
    <LanguageContextConsumer>
      {lang => {
        const { translate } = lang;
        return (
          <nav className={styles.navbar}>
            <div className={cs(styles.navContent, 'wrap')}>
              <img src={logo} alt={translate.logoAlt} className={styles.logo} />
              <ul className={styles.menu}>
                <li className={styles.menuItem}>
                  <NavLink className={styles.menuLink} to={routes.home}>
                    {translate.menu.allAlbums}
                  </NavLink>
                </li>
                <li className={styles.menuItem}>
                  <NavLink className={styles.menuLink} to={routes.bestAlbums}>
                    {translate.menu.bestAlbums}
                  </NavLink>
                </li>
                <li className={styles.menuItem}>
                  <SwitchLang className={styles.menuLink} />
                </li>
              </ul>
            </div>
          </nav>
        );
      }}
    </LanguageContextConsumer>
  );
};

export default NavBar;
