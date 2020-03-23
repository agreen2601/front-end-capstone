import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import AppViews from "./AppViews";

const EventTranspoManager = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState(isAuthenticated());

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  };

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <AppViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default EventTranspoManager;
