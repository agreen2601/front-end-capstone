import React, { useState } from "react";
import apiManager from "./apiManager/apiManager";

const VehicleForm = vehicleFormProps => {
  const [vehicle, setVehicle] = useState({
    company: "",
    vehNumber: "",
    type: "",
    capacity: "",
    isADA: ""
  });

  const handleVehicleChange = evt => {
    const stateToChange = { ...vehicle };
    stateToChange[evt.target.id] = evt.target.value;
    setVehicle(stateToChange);
  };

  const addNewVehicle = evt => {
    evt.preventDefault();
    if (
      vehicle.company === "" ||
      vehicle.type === "" ||
      vehicle.capacity === ""
    ) {
      alert("Please fill required fields");
    } else {
      apiManager
        .addVehicle(vehicle)
        .then(() => vehicleFormProps.history.push("/home"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <label>Company: </label>
          <input
            type="text"
            onChange={handleVehicleChange}
            id="company"
            placeholder="Company"
          />
          <br></br>
          <label>Vehicle Number: </label>
          <input
            type="text"
            onChange={handleVehicleChange}
            id="vehNumber"
            placeholder="Vehicle Number"
          />
          <br></br>
          <label>Vehicle Type: </label>
          <input
            type="text"
            onChange={handleVehicleChange}
            id="type"
            placeholder="Vehicle Type"
          />
          <br></br>
          <label>Capacity: </label>
          <input
            type="text"
            onChange={handleVehicleChange}
            id="capacity"
            placeholder="Capacity"
          />
          <br></br>
          <label>ADA accesible?: Yes</label>
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
          />
          <button type="button" onClick={(addNewVehicle)}>
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default VehicleForm;
