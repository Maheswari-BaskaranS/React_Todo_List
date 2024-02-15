import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// since the index.css is the root file we can make css styles to all the files bcz app is inside index.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

