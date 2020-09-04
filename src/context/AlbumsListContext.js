import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const AlbumListContext = React.createContext();

class AlbumListProvider extends Component {
  state = {
    albumList: new Map(),
  };

  componentDidMount() {
    const albumList = JSON.parse(localStorage.getItem('albumList'));
    if (albumList) {
      this.setState({ albumList: new Map([...albumList]) });
    }
  }

  setLocalStorage = (key, item) => {
    localStorage.setItem(key, JSON.stringify([...item]));
  };

  setAlbumState = albumList => {
    this.setState({ albumList }, () => this.setLocalStorage('albumList', albumList));
  };

  addAlbum = item => {
    if (item !== '' && !/^ *$/.test(item)) {
      const { albumList } = this.state;
      albumList.set(uuid(), { title: item, markAsBest: false });
      this.setAlbumState(albumList);
    }
  };

  deleteAlbum = id => {
    const { albumList } = this.state;
    albumList.delete(id);
    this.setAlbumState(albumList);
  };

  markAsBest = id => {
    const { albumList } = this.state;
    const currentAlbum = albumList.get(id);
    const updatedAlbum = { ...currentAlbum, markAsBest: !currentAlbum.markAsBest };
    albumList.set(id, updatedAlbum);
    this.setAlbumState(albumList);
  };

  render() {
    const { children } = this.props;
    const { albumList } = this.state;
    const albumListArray = [...albumList];
    return (
      <AlbumListContext.Provider
        value={{
          albumList: albumListArray,
          addAlbum: this.addAlbum,
          deleteAlbum: this.deleteAlbum,
          markAsBest: this.markAsBest,
        }}
      >
        {children}
      </AlbumListContext.Provider>
    );
  }
}

AlbumListProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const AlbumListConsumer = ({ children }) => (
  <AlbumListContext.Consumer>{children}</AlbumListContext.Consumer>
);

AlbumListConsumer.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AlbumListProvider, AlbumListConsumer };
