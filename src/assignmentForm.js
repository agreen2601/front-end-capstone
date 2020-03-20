import React, { useState, useEffect } from "react";
import apiManager from "./apiManager/apiManager";
import "./styles.css";

const AssignmentForm = assignmentFormProps => {
  const [assignment, setAssignment] = useState({
    startTime: "",
    endTime: "",
    driverId: 1,
    vehicleId: 1,
    routeId: 1
  });
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [routes, setRoutes] = useState([]);

  const handleAssignmentChange = event => {
    const stateToChange = { ...assignment };
    if (event.target.id === "startTime" || event.target.id === "endTime") {
      stateToChange[event.target.id] = event.target.value;
    } else {
      stateToChange[event.target.id] = parseInt(event.target.value);
    }
    setAssignment(stateToChange);
  };

  const submit = () => {
    apiManager
      .addAssignment(assignment)
      .then(() => assignmentFormProps.history.push("/home"));
  };

  const getAllDrivers = () => {
    return apiManager.getType("drivers").then(driversFromApi => {
      // driversFromApi.sort((a, b) => a.name.localeCompare(b.name));
      setDrivers(driversFromApi);
    });
  };

  const getAllVehicles = () => {
    return apiManager.getType("vehicles").then(vehiclesFromApi => {
      // vehiclesFromApi.sort((a, b) => a.company.localeCompare(b.company));
      setVehicles(vehiclesFromApi);
    });
  };

  const getAllRoutes = () => {
    return apiManager.getType("routes").then(routesFromApi => {
      // routesFromApi.sort((a, b) => (a.number > b.number ? 1 : -1));
      setRoutes(routesFromApi);
    });
  };

  useEffect(() => {
    getAllDrivers();
    getAllVehicles();
    getAllRoutes();
  }, []);

  return (
    <>
      <form>
        <fieldset className="form">
          <div>
            <label>Driver: </label>
            <select id="driverId" onChange={handleAssignmentChange}>
              {drivers.map(driver => (
                <option key={driver.id} value={driver.id}>
                  {driver.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Vehicle: </label>
            <select id="vehicleId" onChange={handleAssignmentChange}>
              {vehicles.map(vehicle => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.company} {vehicle.vehNumber}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Route: </label>
            <select id="routeId" onChange={handleAssignmentChange}>
              {routes.map(route => (
                <option key={route.id} value={route.id}>
                  {route.number}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Start Time: </label>
            <input
              type="time"
              onChange={handleAssignmentChange}
              id="startTime"
            />
          </div>

          <div>
            <label>End Time: </label>
            <input type="time" onChange={handleAssignmentChange} id="endTime" />
          </div>

          <button type="button" onClick={submit}>
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default AssignmentForm;
