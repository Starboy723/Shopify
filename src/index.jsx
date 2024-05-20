import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import Practice from './Practice';
import {Cart_Context_provider}  from './states/Cart_Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Cart_Context_provider>
    <App />
  </Cart_Context_provider>
  </BrowserRouter>
);
