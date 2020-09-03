import React from 'react';
import PropTypes from 'prop-types';
import styles from './GlobalTemplate.module.sass';
import NavBar from '../components/Navbar/Navbar';

const GlobalTemplate = ({ children }) => (
  <>
    <NavBar />
    <main className={styles.main}>{children}</main>
  </>
);

export default GlobalTemplate;

GlobalTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
