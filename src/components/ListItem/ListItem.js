import React from 'react';
import PropTypes from 'prop-types';
import { faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import translate from 'translations/en.json';
import IconBtn from 'components/IconBtn/IconBtn';
import styles from './ListItem.module.sass';

const ListItem = ({ children, id, deleteFn, likeFn }) => (
  <li className={styles.listItem}>
    <p className={styles.albumTitle}>{children}</p>
    <div className={styles.actionWrap}>
      <IconBtn icon={faHeart} title={translate.listItem.likeBtn} onClickFn={() => likeFn(id)} />
      <IconBtn
        icon={faTrashAlt}
        title={translate.listItem.deleteBtn}
        onClickFn={() => deleteFn(id)}
      />
    </div>
  </li>
);

export default ListItem;

ListItem.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteFn: PropTypes.func.isRequired,
  likeFn: PropTypes.func.isRequired,
};
