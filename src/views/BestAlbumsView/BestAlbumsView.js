import React from 'react';
import AlbumList from 'components/AlbumsList/AlbumList';
import { AlbumListConsumer } from 'context/AlbumsListContext';

const BestAlbumsView = () => (
  <AlbumListConsumer>
    {albumConsumer => {
      const { albumList, deleteAlbum, markAsBest } = albumConsumer;
      const bestAlbums = albumList.filter(album => album[1].markAsBest === true);
      return (
        <AlbumList
          albumList={bestAlbums}
          deleteFn={deleteAlbum}
          markAsBestFn={markAsBest}
          className="wrap sm"
        />
      );
    }}
  </AlbumListConsumer>
);

export default BestAlbumsView;
