import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  return (
    <>
      <nav>
        <header>
          <h2>Event Transpo Manager</h2>
        </header>
        <section className="nav_links_container">
          {props.hasUser ? (
            <div className="nav_links">
              <Link to="/driver/form">New Driver</Link>
            </div>
          ) : null}
          {props.hasUser ? (
            <div className="nav_links">
              <Link to="/assignment/form">New Assignment</Link>
            </div>
          ) : null}
          {props.hasUser ? (
            <div className="nav_links">
              <Link to="/route/form">New Route</Link>
            </div>
          ) : null}
          {props.hasUser ? (
            <div className="nav_links">
              <Link to="/home">Route View</Link>
            </div>
          ) : null}
          {props.hasUser ? (
            <div className="nav_links">
              <Link to="/myroutes">My Routes</Link>
            </div>
          ) : null}
          {props.hasUser ? (
            <div className="nav_links">
              <Link to="/driver/list">Driver List</Link>
            </div>
          ) : null}
          
          <div className="nav_links">
            {props.hasUser ? (
              <div>
                <span onClick={handleLogout} className="logout_button"> Logout </span>
              </div>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </div>
        </section>
      </nav>
    </>
  );
};

export default withRouter(NavBar);
