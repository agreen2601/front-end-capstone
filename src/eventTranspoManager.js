import React, { useState, useEffect } from "react";
import apiManager from "./apiManager/apiManager";
import NavBar from "./nav/NavBar";
import AppViews from "./AppViews";
import "./styles.css";

const EventTranspoManager = props => {
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

  const [dates, setDates] = useState([]);
  const [chosenDate, setChosenDate] = useState(1);

  const getDates = type => {
    apiManager.getType(type).then(APIResult => {
      setDates(APIResult);
    });
  };

  useEffect(() => {
    getDates("dates");
  }, []);

  const handleDateChange = event => {
    const dateId = parseInt(event.target.value);
    setChosenDate(dateId);
  };

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} dates={dates} chosenDate={chosenDate} handleDateChange={handleDateChange} {...props} />
      <AppViews hasUser={hasUser} setUser={setUser} dates={dates} chosenDate={chosenDate} {...props} />
    </>
  );
};

export default EventTranspoManager;
