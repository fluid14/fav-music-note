import React from 'react';
import ReactDOM from 'react-dom';
import 'style/main.sass';
import App from 'views/App';

ReactDOM.hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
