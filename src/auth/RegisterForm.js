import React, { useState } from "react";
import { Link } from "react-router-dom";
import apiManager from "../apiManager/apiManager";

const RegisterForm = props => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleRegister = evt => {
    evt.preventDefault();
    apiManager.getUsers().then(users => {
      const user = users.find(user => user.email === credentials.email);
      if (user === undefined) {
        setCredentials("credentials");
        apiManager.addType("users", credentials);
        apiManager.getUsers().then(users => {
          const newUser = users.find(
            newUser => newUser.email === credentials.email
          );
          sessionStorage.setItem("userId", newUser.id);
          props.setUser(credentials);
          props.history.push("/home");
        });
      } else {
        window.alert("There is already an account associated with this email address.");
      }
    });
  };

  return (
    <>
      <h3>Create New Account</h3>
      <fieldset className="form">
        <div>
          <label htmlFor="inputEmail">Email Address: </label>
          <input
            onChange={handleFieldChange}
            type="email"
            id="email"
          ></input>
        </div>

        <div>
          <label htmlFor="inputPassword">Password: </label>
          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
          ></input>
        </div>

        <button type="button" onClick={handleRegister}>
          Submit
        </button>

        <button className="register_button">
          <Link
            to="/login"
            className="register_link"
            style={{ textDecoration: "none" }}
          >
            I have an account
          </Link>
        </button>
      </fieldset>
    </>
  );
};

export default RegisterForm;
