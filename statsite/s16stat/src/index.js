import './index.css';

import { Switch, Route, BrowserRouter } from 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import createHistory from 'history/createBrowserHistory';
import routes from './routes'

const history = createHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <div>
      <Switch>
        {routes.map(rawRoute => {
          const { notExact, ...route } = rawRoute
          return <Route key={route.path} exact={!notExact} {...route} />
        })}
      </Switch>
    </div>
  </BrowserRouter>, 
  document.getElementById('root')
);
registerServiceWorker();
