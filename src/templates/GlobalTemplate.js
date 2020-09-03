import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/Navbar/Navbar';

const GlobalTemplate = ({ children }) => (
  <>
    <NavBar />
    {children}
  </>
);

export default GlobalTemplate;

GlobalTemplate.propType = {
  children: PropTypes.element.isRequired,
};
