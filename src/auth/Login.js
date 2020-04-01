import React, { useState } from "react";
import { Link } from "react-router-dom";
import apiManager from "../apiManager/apiManager";

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" }); //initial state equal to an object with keys email and password that have empty string value

  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = () => {
    apiManager.getUsers().then(users => {
      const user = users.find(
        user =>
          user.email === credentials.email &&
          user.password === credentials.password
      );
      if (user !== undefined) {
        sessionStorage.setItem("userId", user.id);
        props.setUser(credentials);
        props.history.push("/routeview/1");
      } else {
        window.alert("You are not registered. Please create an account");
      }
    });
  };

  return (
    <>
      <h3>Sign In</h3>
      <fieldset className="form">
        <div>
          <label>Email Address: </label>
          <input
            onChange={handleFieldChange}
            type="email"
            id="email"
          ></input>
        </div>

        <div>
          <label>Password: </label>
          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
          ></input>
        </div>

        <button type="submit" onClick={handleLogin}>
          Login
        </button>

        <button className="create_account_button">
          <Link to="/register" className="create_account_link">
            Create new account
          </Link>
        </button>
      </fieldset>
    </>
  );
};

export default Login;
