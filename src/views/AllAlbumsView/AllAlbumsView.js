import React from 'react';
import cs from 'classnames';
import AlbumList from 'components/AlbumsList/AlbumList';
import styles from './AllAlbumsView.module.sass';
import AddForm from '../../components/AddForm/AddForm';

const AllAlbumsView = () => (
  <div className={cs(styles.allAlbumsView, 'wrap')}>
    <div className={styles.formWrap}>
      <AddForm className={styles.formWrap} />
    </div>
    <AlbumList className={styles.listWrap} />
  </div>
);

export default AllAlbumsView;
