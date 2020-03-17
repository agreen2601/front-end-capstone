import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = navBarProps => {
  const handleLogout = () => {
    navBarProps.clearUser();
    navBarProps.history.push("/home");
  };

  return (
    <>
      <h2>Event Transportation Manager</h2>
      <h4>Wrangle 'em up now</h4>
      <nav>
          <ul>
              <li>
                  <Link to="/driver/form"> Add New Driver </Link>
              </li>
              <li>
                  <Link to="/vehicleForm"> Add New Vehicle </Link>
              </li>
              <li>
                <span onClick={handleLogout}> Logout </span>
              </li>
          </ul>
      </nav>
    </>
  );
};

export default withRouter(NavBar);
