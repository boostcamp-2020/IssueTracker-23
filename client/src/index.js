import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style/normalize.css';

const AppTag = <App />;
ReactDOM.render(
  <BrowserRouter>{AppTag}</BrowserRouter>,
  document.getElementById('root')
);
