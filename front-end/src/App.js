import './App.css';
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';
import {browserHistory} from 'react-router'

import Home from './Components/Home/home'

import Cocktail_Search_Page from './Components/CocktailSearch/cocktail_search_page'

import Account_Details from './Components/AccountDetails/account_details'


//var hist = createBrowserHistory();
//history={hist}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/searchpage" component={Cocktail_Search_Page} />
        <Route path="/accountdetails" component={Account_Details} />
        {/* <Route path="/search" component={SearchPage} />
        <Route path="/discover" component={DiscoverPage} /> */}
      </Switch>
    </BrowserRouter>,
    </div>
  );
}

export default App;
