import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Home from './Container/home/index';
import Details from './Container/Details';
import Collection from './Container/Collection';
 const Routes=()=>{
     return(
         <Router>
            <Switch>
                <Route path='/discover'>
                    <Details />
                </Route>
                <Route path='/Home'>
                    <Home />
                </Route>
                <Route path='/collection'>
                    <Collection />
                </Route>
                <Route path='/Category'>
                <h1>category coming soon</h1>
                </Route>
                <Route path='/Calender'>
                    <h1>calender coming soon</h1>
                </Route>
                <Route to='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
     )
 }

 export default Routes;