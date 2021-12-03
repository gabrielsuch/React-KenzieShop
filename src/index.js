import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom"
import Product from "./providers/Product/index"
import Cart from "./providers/Cart/index"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Product>
        <Cart>
          <App />
        </Cart>
      </Product>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
