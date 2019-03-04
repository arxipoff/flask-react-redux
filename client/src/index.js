import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import createHashHistory from "history/createHashHistory";

import store from './store';
import Dashbord from './components/dashbord';
import {
    MAIN_ROUTE
} from './constants';



const history = createHashHistory();

// TODO 404 PAGE

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Switch>

        {/*MAIN ROUTE*/}
        <Route exact path={ MAIN_ROUTE } component={ Dashbord } />

      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);