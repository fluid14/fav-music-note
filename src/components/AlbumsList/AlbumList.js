import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem/ListItem';
import cs from 'classnames';
import withLangContext from 'HOC/LanguageContextHOC';
import styles from './AlbumsList.module.sass';

const AlbumList = ({ className, albumList, deleteFn, markAsBestFn, context: { translate } }) => (
  <ul className={cs(styles.albumsList, className)}>
    {albumList.length > 0 ? (
      albumList.map(album => {
        const id = album[0];
        const { title, markAsBest: bestFlag } = album[1];
        return (
          <React.Fragment key={id}>
            <ListItem
              key={id}
              id={id}
              markAsBest={bestFlag}
              deleteFn={deleteFn}
              markAsBestFn={markAsBestFn}
            >
              {title}
            </ListItem>
          </React.Fragment>
        );
      })
    ) : (
      <p className={styles.emptyInfo}>{translate.emptyListMsg}</p>
    )}
  </ul>
);

export default withLangContext(AlbumList);

AlbumList.propTypes = {
  className: PropTypes.string,
  albumList: PropTypes.array.isRequired,
  deleteFn: PropTypes.func.isRequired,
  markAsBestFn: PropTypes.func.isRequired,
  context: PropTypes.object.isRequired,
};

AlbumList.defaultProps = {
  className: '',
};
