import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { PrivateRoute, UnAuthRoute } from "./PrivateRoute";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.scss";
import Navbar from "./reusable/Navbar"
import ShopPage from "./pages/ShopPage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";



function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="page-container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <UnAuthRoute path="/login" exact component={Login} />
            <PrivateRoute path="/shop" exact component={ShopPage} />
            <PrivateRoute path="/cart" exact component={Cart} />
            <Route path="/*" children={<h2>Page Not Found</h2>} />
          </Switch>
          <footer>
            <h4>
              <small>
                &copy; Copyright 2020-
                {new Date().getFullYear().toString().slice(2)},{" "}
                <a href="https://github.com/sid221/">Sudhanshu Chaurasia</a>
              </small>
            </h4>
          </footer>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
