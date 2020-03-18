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
      <nav>
        <header>
          <h2>Event Transportation Manager</h2>
        </header>
        <section className="nav_links_container">
          <div className="nav_links">
            <Link to="/driver/form"> Add New Driver </Link>
          </div>
          <div className="nav_links">
            <Link to="/assignment/form"> Create New Assignment </Link>
          </div>
          <div className="nav_links">
            <Link to="/home"> Route View </Link>
          </div>
          <div className="nav_links">
            <Link to="/driver/list"> Driver List </Link>
          </div>
          <div>
            {/* <li>
            <span onClick={handleLogout}> Logout </span>
          </li> */}
          </div>
        </section>
      </nav>
    </>
  );
};

export default withRouter(NavBar);
