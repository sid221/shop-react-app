import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute, UnAuthRoute } from "./PrivateRoute";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

import "./App.scss";
import ShopPage from "./pages/ShopPage";
import Login from "./pages/Login";
import Home from "./pages/Home";

const Navbar = () => {
  const token = useSelector((state) => state.user.token);
  const isAuth = !!localStorage.token || !!token ? true : false;
  return (
    <div className="nav-container">
      <nav>
        <Link to="/">
          <img src="/static/images/shop-logo.png" alt="Shopping" />
        </Link>
        {isAuth ? <Link to="/shop">Shop</Link> : <Link to="/login">Login</Link>}
      </nav>
    </div>
  );
};

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
            <Route path="/*" children={<h2>Page Not Found</h2>} />
          </Switch>
          <footer>
            <h4>
              <small>
                &copy; Copyright 2020-
                {new Date().getFullYear().toString().slice(2)}, Example
                Corporation
              </small>
            </h4>
          </footer>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
