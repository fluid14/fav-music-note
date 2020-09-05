import React from 'react';
import ReactDOM from 'react-dom';
import 'style/main.sass';
import App from 'views/App';

const renderMethod = !!module.hot ? ReactDOM.render : ReactDOM.hydrate;
renderMethod(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
