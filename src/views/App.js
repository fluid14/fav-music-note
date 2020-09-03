import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import routes from 'routes/routes.json';
// import AddForm from '../components/AddForm/AddForm';
import GlobalTemplate from '../templates/GlobalTemplate';
import AllAlbumsView from './AllAlbumsView/AllAlbumsView';
import BestAlbumsView from './BestAlbumsView/BestAlbumsView';

const App = () => (
  <Router>
    <GlobalTemplate>
      <Switch>
        <Route exact path={routes.home} render={() => <Redirect to={routes.allAlbums} />} />
        <Route exact path={routes.allAlbums} component={AllAlbumsView} />
        <Route exact path={routes.bestAlbums} component={BestAlbumsView} />
      </Switch>
    </GlobalTemplate>
  </Router>
);

export default App;
