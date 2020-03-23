import React, { useState } from "react";

const Login = props => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleFieldChange = evt => {
    const stateToChange = { ...credentials };
    stateToChange[evt.target.id] = evt.target.value;
    setCredentials(stateToChange);
  };

  const handleLogin = e => {
    e.preventDefault();
    props.setUser(credentials);
    props.history.push("/home");
  };

  return (
    <form onSubmit={handleLogin}>
      <fieldset>
        <h3>Login</h3>
        <div>
          <label>Email address: </label>
          <input
            onChange={handleFieldChange}
            type="email"
            id="email"
            required=""
          />
          <label>Password</label>
          <input
            onChange={handleFieldChange}
            type="password"
            id="password"
            required=""
          />
        </div>
        <button type="submit">Sign in</button>
      </fieldset>
    </form>
  );
};

export default Login;
