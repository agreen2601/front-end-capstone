import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosList } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";

const NavBar = props => {
  const handleLogout = () => {
    props.clearUser();
    props.history.push("/");
  };

  if (props.match.params.dateID !== undefined) {
    console.log(props.match.params.dateID)
  }

  return (
    <>
      <nav className="navbar">
        <span className="header">Event Transpo Manager</span>
        <div className="nav_icons">
          {props.hasUser ? (
            <IoMdHome
              onClick={() => props.history.push("/routeview/1")}
              className="nav_home"
            />
          ) : null}
          {props.hasUser ? (
            <IoMdPersonAdd
              onClick={() => props.history.push("/driver/form")}
              className="nav_home"
            />
          ) : null}
          <div className="nav_list">
            <IoIosList className="nav_icon" />
            <section className="nav_dropdown">
              {props.hasUser ? (
                <div>
                  <Link className="nav_links" to="/route/form">
                    New Route
                  </Link>
                </div>
              ) : null}
              {props.hasUser ? (
                <div>
                  <Link className="nav_links" to="/date/form">
                    New Date {"\u00A0"}
                  </Link>
                </div>
              ) : null}
              {props.hasUser ? (
                <div>
                  <Link className="nav_links" to="/myroutes/1">
                    My Routes
                  </Link>
                </div>
              ) : null}
              {props.hasUser ? (
                <div>
                  <Link className="nav_links" to="/driver/list">
                    Driver List{"\u00A0"}
                  </Link>
                </div>
              ) : null}
              <div>
                {props.hasUser ? (
                  <span className="nav_links" onClick={handleLogout}>
                    Logout {"\u00A0"} {"\u00A0"} {"\u00A0"}{"\u00A0"}
                  </span>
                ) : (
                  <Link className="nav_links" to="/login">
                    Login {"\u00A0"} {"\u00A0"} {"\u00A0"} {"\u00A0"}
                  </Link>
                )}
              </div>
            </section>
          </div>
        </div>
      </nav>
    </>
  );
};

export default withRouter(NavBar);
