import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux"
import {get_state} from "./actions/userActions"
import store from "./store"

/* Pages */
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Images from "./pages/Images"
import Layout from "./pages/Layout";
import LogIn from "./pages/LogIn";
import Settings from "./pages/Settings";
import SignUp from "./pages/SignUp";


store.dispatch({type: "INIT"})



const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
        <Route path="/signup" name="signup" component={SignUp}></Route>
        <Route path="/dashboard" name="dashboard" component={LogIn}></Route>
        <Route path="/settings" name="settings" component={Settings}></Route>
        <Route path="/images" name="images" component={Images}></Route>
    </Route>
  </Router>
  </Provider>,
app);



//      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
//      <Route path="settings" name="settings" component={Settings}></Route>