import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem/ListItem';
import cs from 'classnames';
import translate from 'translations/en.json';
import { AlbumListConsumer } from 'context/AlbumsListContext';
import styles from './AlbumsList.module.sass';

const AlbumList = ({ className, onlyBestAlbums }) => (
  <ul className={cs(styles.albumsList, className)}>
    <AlbumListConsumer>
      {albumConsumer => {
        const { albumList, deleteAlbum, markAsBest } = albumConsumer;
        return albumList.length > 0 ? (
          albumList.map(album => {
            const id = album[0];
            const { title, markAsBest: bestFlag } = album[1];
            return (
              <>
                {onlyBestAlbums ? (
                  bestFlag && (
                    <ListItem
                      key={id}
                      id={id}
                      markAsBest={bestFlag}
                      deleteFn={deleteAlbum}
                      likeFn={markAsBest}
                    >
                      {title}
                    </ListItem>
                  )
                ) : (
                  <ListItem
                    key={id}
                    id={id}
                    markAsBest={bestFlag}
                    deleteFn={deleteAlbum}
                    likeFn={markAsBest}
                  >
                    {title}
                  </ListItem>
                )}
              </>
            );
          })
        ) : (
          <p>{translate.emptyListMsg}</p>
        );
      }}
    </AlbumListConsumer>
  </ul>
);

export default AlbumList;

AlbumList.propTypes = {
  className: PropTypes.string,
  onlyBestAlbums: PropTypes.bool,
};

AlbumList.defaultProps = {
  className: '',
  onlyBestAlbums: false,
};
