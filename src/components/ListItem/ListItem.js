import React from 'react';
import { faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import styles from './ListItem.module.sass';
import IconBtn from '../IconBtn/IconBtn';

const ListItem = () => (
  <li className={styles.listItem}>
    <p className={styles.albumTitle}>Appetite for destruction</p>
    <div className={styles.actionWrap}>
      <IconBtn icon={faHeart} />
      <IconBtn icon={faTrashAlt} />
    </div>
  </li>
);

export default ListItem;
