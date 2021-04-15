import React from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import App from './containers/AppContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const middleware = applyMiddleware(
    thunk
    // , createLogger()
  );
  const store = createStore(rootReducer, middleware);
  
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Route path="/" component={App}>
          <Route path="/:catA" component={App} />
          <Route path="/:catA/:catB" component={App} />
          <Route path="/:catA/:catB/:catC" component={App} />
          <Route path="/:catA/:catB/:catC/:catD" component={App} />
          <Route path="/:catA/:catB/:catC/:catD/:catE" component={App} />
          <Route path="/search/:searchVal" component={App} />
        </Route>
      </HashRouter>
    </Provider>,
    div
  );
});
