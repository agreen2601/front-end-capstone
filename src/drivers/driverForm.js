import React, { useState } from "react";
import apiManager from "../apiManager/apiManager";

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
    isADA: ""
  });

  const [assignment, setAssignment] = useState({
    date: new Date,
    startTime: "",
    endTime: "",
    driverId: driver.id,
    vehicleId: vehicle.id,
    routeId: ""
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

  const handleAssignmentChange = event => {
    const stateToChange = { ...assignment };
    stateToChange[event.target.id] = event.target.value;
    setAssignment(stateToChange);
  };

  const getThisDriver = () => {
    return apiManager.getDriver(driver.id).then(thisDriver => {
        console.log(thisDriver);
    });
};

  const submit = () => {
    apiManager.addDriver(driver);
    apiManager.addVehicle(vehicle);
    apiManager
      .addAssignment(assignment)
      .then(() => driverFormProps.history.push("/home"))
      .then(console.log("driver", driver))
      .then(console.log("assignment", assignment))
      getThisDriver();
  };

  return (
    <>
      <form>
        <fieldset>

          <label>Driver Name: </label>
          <input
            type="text"
            required
            onChange={handleDriverChange}
            id="name"
            placeholder="Driver Name"
          />
          <br></br>

          <label>Phone Number: </label>
          <input
            type="text"
            required
            onChange={handleDriverChange}
            id="phoneNumber"
            placeholder="Phone Number"
          />
          <br></br>

          <label>From City: </label>
          <input
            type="text"
            required
            onChange={handleDriverChange}
            id="fromCity"
            placeholder="From City"
          />
          <br></br>

          <label>Notes: </label>
          <input
            type="text"
            onChange={handleDriverChange}
            id="notes"
            placeholder="Notes"
          />
          <br></br>

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
          <br></br>

          <label>Route</label>
          <select id="routeId" onChange={handleAssignmentChange}>
            <option value="1">Route 1</option>
            <option value="2">Route 2</option>
            <option value="3">Route 3</option>
          </select>
          <br></br>

          <label>Start Time</label>
          <input 
            type="time"
            onChange={handleAssignmentChange}
            id="startTime" />
          <br></br>

          <label>End Time</label>
          <input 
            type="time"
            onChange={handleAssignmentChange}
            id="endTime" />
          <br></br>

          <button type="button" onClick={submit}>
            Submit
          </button>

        </fieldset>
      </form>
    </>
  );
};

export default DriverForm;
