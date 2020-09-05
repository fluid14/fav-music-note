import React from 'react';
import PropTypes from 'prop-types';
import { faTrashAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import IconBtn from 'components/IconBtn/IconBtn';
import { LanguageContextConsumer } from 'context/LanguageContext';
import styles from './ListItem.module.sass';

const ListItem = ({ children, id, deleteFn, markAsBestFn, markAsBest }) => (
  <LanguageContextConsumer>
    {lang => {
      const { translate } = lang;
      return (
        <li className={styles.listItem}>
          <p className={styles.albumTitle}>{children}</p>
          <div className={styles.actionWrap}>
            <IconBtn
              icon={faHeart}
              title={translate.listItem.likeBtn}
              markAsBest={markAsBest}
              onClickFn={() => markAsBestFn(id)}
            />
            <IconBtn
              icon={faTrashAlt}
              title={translate.listItem.deleteBtn}
              onClickFn={() => deleteFn(id)}
            />
          </div>
        </li>
      );
    }}
  </LanguageContextConsumer>
);

export default ListItem;

ListItem.propTypes = {
  children: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteFn: PropTypes.func.isRequired,
  markAsBestFn: PropTypes.func.isRequired,
  markAsBest: PropTypes.bool.isRequired,
};
