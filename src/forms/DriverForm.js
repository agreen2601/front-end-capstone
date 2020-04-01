import React, { useState } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";

const DriverForm = props => {
  const [driver, setDriver] = useState({
    name: "",
    phoneNumber: "",
    local: "",
    notes: ""
  });

  const handleDriverChange = event => {
    const stateToChange = { ...driver };
    stateToChange[event.target.id] = event.target.value;
    setDriver(stateToChange);
  };

  const submit = () => {
    apiManager.getType("drivers").then(allDrivers => {
      const driverA = allDrivers.find(driverA => driverA.name === driver.name);
      if (driverA === undefined) {
        if (driver.name !== "") {
          apiManager.addType("drivers", driver);
        }
        props.history.push("/vehicle/form");
      } else {
        alert("Driver already in database.");
      }
    });
  };

  return (
    <>
      <form>
        <h3>Create New Driver</h3>
        <fieldset className="form">
          <div>
            <label>Driver Name: </label>
            <input
              type="text"
              required
              onChange={handleDriverChange}
              id="name"
            />
          </div>

          <div>
            <label>Phone Number: </label>
            <input
              type="text"
              required
              onChange={handleDriverChange}
              id="phoneNumber"
            />
          </div>

          <div>
            <label>Local? </label>
            <label>Yes</label>
            <input
              type="radio"
              name="local"
              onChange={handleDriverChange}
              id="local"
              value="L"
            />
            <label>No</label>
            <input
              type="radio"
              name="local"
              onChange={handleDriverChange}
              id="local"
              value=""
              defaultChecked
            />
          </div>

          <div>
            <label>Notes: </label>
            <textarea type="text" onChange={handleDriverChange} id="notes" />
          </div>

          <button type="button" onClick={submit}>
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default DriverForm;
