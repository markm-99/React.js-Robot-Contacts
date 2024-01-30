// this is where the entire webapp is displayed (all components)
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
// import Card from './Card.js';
import App from './containers/App.js';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import {robots} from './robots.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* add App component */}
    <App robots={robots}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();