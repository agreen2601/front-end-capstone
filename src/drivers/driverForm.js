import React, { useState } from "react";
import apiManager from "../apiManager/apiManager";
import "../styles.css"

const DriverForm = driverFormProps => {

  const [driver, setDriver] = useState({
    name: "",
    phoneNumber: "",
    fromCity: "",
    notes: ""
  });

  const [vehicle, setVehicle] = useState({
    company: "",
    vehNumber: "",
    type: "",
    capacity: "",
    isADA: false
  });

  const handleDriverChange = event => {
    const stateToChange = { ...driver };
    stateToChange[event.target.id] = event.target.value;
    setDriver(stateToChange);
  };

  const handleVehicleChange = event => {
    const stateToChange = { ...vehicle };
    stateToChange[event.target.id] = event.target.value;
    setVehicle(stateToChange);
  };

  const submit = () => {
    apiManager.addType("drivers", driver);
    apiManager.addType("vehicles", vehicle)
      .then(() => driverFormProps.history.push("/assignment/form"));
  };

  return (
    <>
      <form>
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
            <label>From City: </label>
          <input
            type="text"
            required
            onChange={handleDriverChange}
            id="fromCity"
          />
          </div>

          
          <div><label>Notes: </label>
          <input
            type="text"
            onChange={handleDriverChange}
            id="notes"
          />

          <div>
            <label>Company: </label>
          <input
            type="text"
            onChange={handleVehicleChange}
            id="company"
          />
          </div>

          <div>
            <label>Vehicle Number: </label>
          <input
            type="text"
            onChange={handleVehicleChange}
            id="vehNumber"
          />
          </div>

          <label>Vehicle Type: </label>
          <input
            type="text"
            onChange={handleVehicleChange}
            id="type"
          />
          </div>

          <div>
            <label>Capacity: </label>
          <input
            type="text"
            onChange={handleVehicleChange}
            id="capacity"
          />
          </div>

          <div>
            <label>ADA accesible? Yes</label>
          <input
            type="radio"
            name="ADA"
            onChange={handleVehicleChange}
            id="isADA"
            value="true"
          />
          <label>No</label>
          <input
            type="radio"
            name="ADA"
            onChange={handleVehicleChange}
            id="isADA"
            value="false"
            defaultChecked
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

export default DriverForm;
