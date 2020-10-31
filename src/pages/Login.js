import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "USER_LOGIN_LOADING" });
    setTimeout(() => {
      let token = "secure_jwt";
      dispatch({
        type: "USER_LOGIN",
        payload: { name, email, password, token },
      });
      return history.push("/shop");
    }, 2500);
  };

  return (
    <div className="login-page-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            required={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit} disabled={loading}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
