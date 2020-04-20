import React, { useState } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";

const VehicleForm = props => {
  const [vehicle, setVehicle] = useState({
    company: "",
    number: "",
    type: "",
    capacity: "",
    isADA: ""
  });

  const handleVehicleChange = event => {
    const stateToChange = { ...vehicle };
    stateToChange[event.target.id] = event.target.value;
    setVehicle(stateToChange);
  };

  const submit = () => {
    apiManager.getType("vehicles").then(allVehicles => {
      const vehicleA = allVehicles.find(
        vehicleA =>
          vehicleA.company === vehicle.company &&
          vehicleA.number === vehicle.number
      );
      if (vehicleA === undefined) {
        if (vehicle.company !== "" && vehicle.number !== "") {
          apiManager
            .addType("vehicles", vehicle)
            .then(result => props.setVehicleId(result.id));
        }
      } else {
        alert("Vehicle already in database.");
      }
      setTimeout(() => {props.history.push("/assignment/form")}, 100);
    });
  };

  return (
    <>
      <form>
        <h3>Create New Vehicle</h3>
        <fieldset className="form">
          <div>
            <label>Company: </label>
            <input type="text" onChange={handleVehicleChange} id="company" />
          </div>

          <div>
            <label>Vehicle Number: </label>
            <input type="text" onChange={handleVehicleChange} id="number" />
          </div>

          <div>
            <label>Vehicle Type: </label>
            <input type="text" onChange={handleVehicleChange} id="type" />
          </div>

          <div>
            <label>Capacity: </label>
            <input type="text" onChange={handleVehicleChange} id="capacity" />
          </div>

          <div>
            <label>ADA accesible? Yes</label>
            <input
              type="radio"
              name="ADA"
              onChange={handleVehicleChange}
              id="isADA"
              value="ADA"
            />
            <label>No</label>
            <input
              type="radio"
              name="ADA"
              onChange={handleVehicleChange}
              id="isADA"
              value=""
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

export default VehicleForm;
