import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import { App } from './Components/App/App';

import ReactQuery from './Helpers/ReactQuery';
import ContextProvider from './Helpers/UseContext';

import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <ReactQuery>
        <App/>
      </ReactQuery>
    </ContextProvider>
  </BrowserRouter>
  , document.getElementById('root')
);
