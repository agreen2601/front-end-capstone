import React, { useState } from "react";
import apiManager from "./apiManager/apiManager";
import "./styles.css";

const RouteForm = routeFormProps => {
  const [route, setRoute] = useState({
    number: "",
    color: "",
    name: "",
    numOfVehNeeded: "",
    date: ""
  });

  const handleRouteChange = event => {
    const stateToChange = { ...route };
    if (event.target.id === "number" || event.target.id === "endTime") {
      stateToChange[event.target.id] = parseInt(event.target.value);
    } else {
      stateToChange[event.target.id] = event.target.value;
    }
    setRoute(stateToChange);
  };

  const submit = () => {
    apiManager
      .addType("routes", route)
      .then(() => routeFormProps.history.push("/assignment/form"));
  };

  return (
    <>
      <form>
        <fieldset className="form">
          <div className="form_child">
            <label>Route Number: </label>
            <input
              type="text"
              required
              onChange={handleRouteChange}
              id="number"
            />
          </div>

          <div className="form_child">
            <label>Color: </label>
            <input
              type="text"
              required
              onChange={handleRouteChange}
              id="color"
            />
          </div>

          <div className="form_child">
            <label>Name: </label>
            <input type="text" onChange={handleRouteChange} id="name" />
          </div>

          <div className="form_child">
            <label>Number of Vehicles Needed: </label>
            <input
              type="text"
              onChange={handleRouteChange}
              id="numOfVehNeeded"
            />
          </div>

          <div className="form_child">
            <label>Date: </label>
            <input type="date" onChange={handleRouteChange} id="date" />
          </div>

          <button type="button" onClick={submit}>
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default RouteForm;
