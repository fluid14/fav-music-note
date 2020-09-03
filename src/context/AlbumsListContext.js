import React, { Component } from 'react';
import PropTypes from 'prop-types';

const AlbumListContext = React.createContext();

class AlbumListProvider extends Component {
  state = {
    albumList: [],
  };

  componentDidMount() {
    const albums = JSON.parse(localStorage.getItem('albums'));
    if (albums) {
      this.setState({ albumList: albums });
    }
  }

  addAlbum = item => {
    if (item !== '') {
      this.setState(
        prevState => ({
          albumList: [...prevState.albumList, item],
        }),
        () => localStorage.setItem('albums', JSON.stringify(this.state.albumList)),
      );
    }
  };

  render() {
    const { children } = this.props;
    const { albumList } = this.state;
    console.log(albumList);
    return (
      <AlbumListContext.Provider value={{ albumList, addAlbum: this.addAlbum }}>
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
