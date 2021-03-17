import './App.css';
//import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
//import {browserHistory} from 'react-router'

import Home from './Components/Home/home'

//import cocktail_search_page from './cocktail_search_page'
//var hist = createBrowserHistory();
//history={hist}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/search" component={SearchPage} />
        <Route path="/discover" component={DiscoverPage} /> */}
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
