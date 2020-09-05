import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import logo from 'assets/logo.png';
import { NavLink } from 'react-router-dom';
import routes from 'routes/routes.json';
import SwitchLang from 'components/SwitchLang/SwitchLang';
import withLangContext from 'HOC/LanguageContextHOC';
import styles from './Navbar.module.sass';

const NavBar = ({ context: { translate } }) => (
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

export default withLangContext(NavBar);

NavBar.propTypes = {
  context: PropTypes.element.isRequired,
};
