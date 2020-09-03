import React from 'react';
import { faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import translate from 'translations/en.json';
import styles from './ListItem.module.sass';
import IconBtn from '../IconBtn/IconBtn';

const ListItem = () => (
  <li className={styles.listItem}>
    <p className={styles.albumTitle}>Appetite for destruction</p>
    <div className={styles.actionWrap}>
      <IconBtn icon={faHeart} title={translate.listItem.likeBtn} />
      <IconBtn icon={faTrashAlt} title={translate.listItem.deleteBtn} />
    </div>
  </li>
);

export default ListItem;
