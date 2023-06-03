import './index.css';
import App from './App';

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//redux
import {store} from './redux/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>

  </BrowserRouter>

);

