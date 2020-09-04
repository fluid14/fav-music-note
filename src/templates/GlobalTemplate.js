import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import styles from './GlobalTemplate.module.sass';
import NavBar from '../components/Navbar/Navbar';

const GlobalTemplate = ({ children }) => (
  <>
    <NavBar />
    <main className={cs(styles.main, 'wrap')}>{children}</main>
  </>
);

export default GlobalTemplate;

GlobalTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
