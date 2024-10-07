import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// This is the entry point where the App component is rendered into the root div of the public/index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // 'root' is the id in your public/index.html file
);
