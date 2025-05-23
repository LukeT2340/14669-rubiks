import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './styles/main.css';
import './styles/fonts.css';
import './js/masthead/index.js';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
