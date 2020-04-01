import React, { useState, useEffect } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";

const DriverEditForm = props => {
  const [driver, setDriver] = useState({
    name: "",
    phoneNumber: "",
    local: "",
    notes: ""
  });

  const [vehicle, setVehicle] = useState({
    company: "",
    number: "",
    type: "",
    capacity: "",
    isADA: ""
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

  useEffect(() => {
    apiManager
      .getTypeWithId("drivers", props.match.params.driverId)
      .then(driver => {
        apiManager
          .getTypeWithId("vehicles", props.match.params.vehicleId)
          .then(vehicle => {
            setDriver(driver);
            setVehicle(vehicle);
          });
      });
  }, []);

  const submit = () => {
    const editedDriver = {
      id: props.match.params.driverId,
      name: driver.name,
      phoneNumber: driver.phoneNumber,
      local: driver.local,
      notes: driver.notes
    };

    const editedVehicle = {
      id: props.match.params.vehicleId,
      company: vehicle.company,
      number: vehicle.number,
      type: vehicle.type,
      capacity: vehicle.capacity,
      isADA: vehicle.isADA
    };

    apiManager.updateType("drivers", editedDriver);
    apiManager
      .updateType("vehicles", editedVehicle)
      .then(() => props.history.push(`/routeview/${props.match.params.dateId}`));
  };

  return (
    <>
      <form>
      <h3>Edit Details</h3>
        <fieldset className="form">
          <div>
            <label>Driver Name: </label>
            <input
              type="text"
              required
              onChange={handleDriverChange}
              id="name"
              value={driver.name}
            />
          </div>

          <div>
            <label>Phone Number: </label>
            <input
              type="text"
              required
              onChange={handleDriverChange}
              id="phoneNumber"
              value={driver.phoneNumber}
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
            <input
              type="text"
              onChange={handleDriverChange}
              id="notes"
              value={driver.notes}
            />

            <div>
              <label>Company: </label>
              <input
                type="text"
                onChange={handleVehicleChange}
                id="company"
                value={vehicle.company}
              />
            </div>

            <div>
              <label>Vehicle Number: </label>
              <input
                type="text"
                onChange={handleVehicleChange}
                id="number"
                value={vehicle.number}
              />
            </div>

            <label>Vehicle Type: </label>
            <input
              type="text"
              onChange={handleVehicleChange}
              id="type"
              value={vehicle.type}
            />
          </div>

          <div>
            <label>Capacity: </label>
            <input
              type="text"
              onChange={handleVehicleChange}
              id="capacity"
              value={vehicle.capacity}
            />
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

export default DriverEditForm;
