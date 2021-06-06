import './index.css';
import reportWebVitals from './reportWebVitals';

import React, { FC } from 'react';
import { render } from 'react-dom';

import { Generate } from "./Generate"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Authentication } from './Authentication';

const App: FC = () => {

  return (
    <Router>
      <Authentication>
        <Switch>
          <Route path="/">
            <Generate />
          </Route>
        </Switch>
      </Authentication>
    </Router>

  )
}

render(<App />, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
