import React from "react";
import { Link, BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import { PrivateRoute, UnAuthRoute } from "./PrivateRoute";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./redux/store";

import "./App.scss";
import ShopPage from "./pages/ShopPage";
import Login from "./pages/Login";
import Home from "./pages/Home";

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const isAuth = !!localStorage.token || !!token ? true : false;

  const handleLogout = () => {
    dispatch({type: "USER_LOGOUT"})
    history.push("/")
  }
  return (
    <div className="nav-container">
      <nav>
        <Link to="/">
          <img src="/static/images/shop-logo.png" alt="Shopping" />
        </Link>
        {isAuth ? (
          <div>
            <Link to="/shop">Shop</Link>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
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
