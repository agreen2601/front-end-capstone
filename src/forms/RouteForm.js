import React, { useState } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";

const RouteForm = routeFormProps => {
  const [route, setRoute] = useState({
    number: "",
    color: "",
    description: "",
    numOfVehNeeded: ""
  });

  const handleRouteChange = event => {
    const stateToChange = { ...route };
    if (event.target.id === "numOfVehNeeded") {
      stateToChange[event.target.id] = parseInt(event.target.value);
    } else {
      stateToChange[event.target.id] = event.target.value;
    }
    setRoute(stateToChange);
  };

  const submit = () => {
    apiManager.addType("routes", route)
      .then(() => routeFormProps.history.push("/routeview"));
  };

  return (
    <>
      <form>
        <h3>Create New Route</h3>
        <fieldset className="form">
          <div className="form_child">
            <label>Route Number/Name: </label>
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
            <label>Description: </label>
            <input type="text" onChange={handleRouteChange} id="description" />
          </div>

          <div className="form_child">
            <label>Number of Vehicles Needed: </label>
            <input
              type="text"
              onChange={handleRouteChange}
              id="numOfVehNeeded"
            />
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
