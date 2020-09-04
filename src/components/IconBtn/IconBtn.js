import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './IconBtn.module.sass';

const IconBtn = ({ icon, className, title, onClickFn, markAsBest }) => (
  <button
    type="button"
    title={title}
    className={cs(className, styles.iconBtn, { [styles.active]: markAsBest })}
    onClick={onClickFn}
  >
    <FontAwesomeIcon icon={icon} />
  </button>
);

export default IconBtn;

IconBtn.propTypes = {
  icon: PropTypes.object.isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClickFn: PropTypes.func.isRequired,
  markAsBest: PropTypes.bool,
};

IconBtn.defaultProps = {
  className: '',
  markAsBest: false,
};
