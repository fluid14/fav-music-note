import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from '../components/Navbar/Navbar';

const App = () => (
  <BrowserRouter>
    <NavBar />
  </BrowserRouter>
);

export default App;
