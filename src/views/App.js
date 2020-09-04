import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import routes from 'routes/routes.json';
import { LanguageContextProvider } from 'context/LanguageContext';
import GlobalTemplate from 'templates/GlobalTemplate';
import { AlbumListProvider } from 'context/AlbumsListContext';
import AllAlbumsView from './AllAlbumsView/AllAlbumsView';
import BestAlbumsView from './BestAlbumsView/BestAlbumsView';

const App = () => (
  <Router>
    <LanguageContextProvider>
      <GlobalTemplate>
        <AlbumListProvider>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to={routes.allAlbums} />} />
            <Route exact path={routes.allAlbums} component={AllAlbumsView} />
            <Route exact path={routes.bestAlbums} component={BestAlbumsView} />
          </Switch>
        </AlbumListProvider>
      </GlobalTemplate>
    </LanguageContextProvider>
  </Router>
);

export default App;
