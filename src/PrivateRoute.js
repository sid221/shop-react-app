import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.user.token);
  const isAuth = !!localStorage.token || !!token ? true : false;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const UnAuthRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.user.token);
  const isAuth = !!localStorage.token || !!token ? true : false;

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export { PrivateRoute, UnAuthRoute };
