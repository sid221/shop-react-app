import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// const CheckAuth = () => {

//     const token = useSelector((state) => state.user.token);
//     const [isAuth, setIsAuth] = useState(false);

//   useEffect(() => {
//     setIsAuth(!!localStorage.token || !!token ? true : false);
//   }, [setIsAuth, token]);

//   return isAuth;
// };

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
