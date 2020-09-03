import React from 'react';
import PropTypes from 'prop-types';
import { faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import translate from 'translations/en.json';
import styles from './ListItem.module.sass';
import IconBtn from '../IconBtn/IconBtn';

const ListItem = ({ children }) => (
  <li className={styles.listItem}>
    <p className={styles.albumTitle}>{children}</p>
    <div className={styles.actionWrap}>
      <IconBtn icon={faHeart} title={translate.listItem.likeBtn} />
      <IconBtn icon={faTrashAlt} title={translate.listItem.deleteBtn} />
    </div>
  </li>
);

export default ListItem;

ListItem.propTypes = {
  children: PropTypes.string.isRequired,
};
