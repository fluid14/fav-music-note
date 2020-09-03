import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './IconBtn.module.sass';

const IconBtn = ({ icon, className }) => (
  <button type="button" title="Best of the best" className={cs(className, styles.iconBtn)}>
    <FontAwesomeIcon icon={icon} />
  </button>
);

export default IconBtn;

IconBtn.propTypes = {
  icon: PropTypes.element.isRequired,
  className: PropTypes.string,
};

IconBtn.defaultProps = {
  className: '',
};
