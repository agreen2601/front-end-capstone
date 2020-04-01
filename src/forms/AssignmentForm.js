import React, { useState, useEffect } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";

const AssignmentForm = props => {
  const [assignment, setAssignment] = useState({
    startTime: "",
    endTime: "",
    driverId: 1,
    vehicleId: 1,
    routeId: 1,
    dateId: props.chosenDate
  });

  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [dates, setDates] = useState([]);

  const getAllDropDowns = () => {
    return (
      apiManager.getType("drivers").then(driversFromApi => {
        driversFromApi.sort((a, b) => a.name.localeCompare(b.name));
        setDrivers(driversFromApi);
      }),
      apiManager.getType("vehicles").then(vehiclesFromApi => {
        vehiclesFromApi.sort((a, b) => a.company.localeCompare(b.company));
        setVehicles(vehiclesFromApi);
      }),
      apiManager.getType("routes").then(routesFromApi => {
        routesFromApi.sort((a, b) => (a.number > b.number ? 1 : -1));
        setRoutes(routesFromApi);
      }),
      apiManager.getType("dates").then(datesFromApi => {
        datesFromApi.sort((a, b) => (a.number > b.number ? -1 : 1));
        setDates(datesFromApi);
      })
    );
  };

  const handleAssignmentChange = event => {
    const stateToChange = { ...assignment };
    if (event.target.id === "startTime" || event.target.id === "endTime") {
      stateToChange[event.target.id] = event.target.value;
    } else {
      stateToChange[event.target.id] = parseInt(event.target.value);
    }
    setAssignment(stateToChange);
  };

  useEffect(() => {
    getAllDropDowns();
  }, []);

  const submit = () => {
    apiManager.getAssignments().then(assignments => {
      const assign = assignments.find(
        assign =>
          assign.dateId === assignment.dateId &&
          assign.driverId === assignment.driverId
      );
      console.log("assign", assign);
      console.log("assignment", assignment);
      if (assign === undefined) {
        apiManager
          .addType("assignments", assignment)
          .then(() =>
            props.history.push(`/routeview`)
          );
      } else {
        alert(
          `${assign.driver.name} has already been assigned on ${assign.date.date}.`
        );
        props.history.push(`/routeview`);
      }
    });
  };

  return (
    <>
      <form>
        <h3>Create New Assignment</h3>
        <fieldset className="form">
          <div>
            <label>Driver: </label>
            <select
              id="driverId"
              onChange={handleAssignmentChange}
              value={assignment.driverId}
            >
              {drivers.map(driver => (
                <option key={driver.id} value={driver.id}>
                  {driver.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Vehicle: </label>
            <select
              id="vehicleId"
              onChange={handleAssignmentChange}
              value={assignment.vehicleId}
            >
              {vehicles.map(vehicle => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.company} {vehicle.number}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Route: </label>
            <select
              id="routeId"
              onChange={handleAssignmentChange}
              value={assignment.routeId}
            >
              {routes.map(route => (
                <option key={route.id} value={route.id}>
                  {route.number}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Date: </label>
            <select
              id="dateId"
              onChange={handleAssignmentChange}
              value={assignment.dateId}
            >
              {dates.map(date => (
                <option key={date.id} value={date.id}>
                  {date.date}
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
