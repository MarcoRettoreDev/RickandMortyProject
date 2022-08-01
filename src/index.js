import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './Components/App/App';
import ReactQuery from './Helpers/ReactQuery';

ReactDOM.render(
  <ReactQuery>
    <App />
  </ReactQuery>
  , document.getElementById('root')
);
