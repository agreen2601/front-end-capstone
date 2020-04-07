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

  return (
    <>
      <nav className="navbar">
        <span className="header">Event Transpo Manager</span>
        <div className="nav_icons">
          <div>
            <select
              id="dateId"
              onChange={props.handleDateChange}
              value={props.chosenDate}
              className="date_picker"
            >
              {props.dates.map(date => (
                <option key={date.id} value={date.id}>
                  {date.date}
                </option>
              ))}
            </select>
          </div>
          {props.hasUser ? (
            <IoMdHome
              onClick={() => props.history.push("/routeview")}
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
                  <Link className="nav_links" to="/myroutes">
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
              {props.hasUser ? (
                <div>
                  <Link className="nav_links" to="/vehicle/form">
                    New Vehicle
                  </Link>
                </div>
              ) : null}
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
              <div>
                {props.hasUser ? (
                  <span className="nav_links" onClick={handleLogout}>
                    Logout {"\u00A0"} {"\u00A0"} {"\u00A0"}
                    {"\u00A0"}
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
