import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem/ListItem';
import cs from 'classnames';
import withLangContext from 'HOC/LanguageContextHOC';
import { AlbumListConsumer } from 'context/AlbumsListContext';
import styles from './AlbumsList.module.sass';

const AlbumList = ({ className, onlyBestAlbums, context: { translate } }) => (
  <ul className={cs(styles.albumsList, className)}>
    <AlbumListConsumer>
      {albumConsumer => {
        const { albumList, deleteAlbum, markAsBest } = albumConsumer;
        return albumList.length > 0 ? (
          albumList.map(album => {
            const id = album[0];
            const { title, markAsBest: bestFlag } = album[1];
            return (
              <React.Fragment key={id}>
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
              </React.Fragment>
            );
          })
        ) : (
          <p className={styles.emptyInfo}>{translate.emptyListMsg}</p>
        );
      }}
    </AlbumListConsumer>
  </ul>
);

export default withLangContext(AlbumList);

AlbumList.propTypes = {
  className: PropTypes.string,
  onlyBestAlbums: PropTypes.bool,
  context: PropTypes.object.isRequired,
};

AlbumList.defaultProps = {
  className: '',
  onlyBestAlbums: false,
};
