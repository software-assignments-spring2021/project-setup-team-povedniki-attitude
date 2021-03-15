import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// components
import App from './App';

var hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={hist}>
      <Switch>
        <Route path="/" component={App} />
        {/* <Route path="/search" component={SearchPage} />
        <Route path="/discover" component={DiscoverPage} /> */}
      </Switch>
    </Router>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
