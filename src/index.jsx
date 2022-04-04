// Importing libraries
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from "react-redux";

// Importing the store
import store from "./store/store";

// Importing styles
import './assets/material-dashboard-template/css/material-dashboard.min.css';
import './assets/material-dashboard-template/css/nucleo-icons.css';
import './assets/material-dashboard-template/css/nucleo-svg.css';

// Importing views
import Home from "./views/home/Home";
import About from "./views/about/About";
import Error404 from "./views/error/Error404";

// Importing components

// The final render
ReactDOM.render(
      <Provider store={store}>
          <React.StrictMode>
              <Router>
                  <style>
                      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"/>
                      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
                  </style>

                  <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                      <Route path="/about">
                          <About/>
                      </Route>
                      <Route>
                          <Error404/>
                      </Route>
                  </Switch>
              </Router>
          </React.StrictMode>
      </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();