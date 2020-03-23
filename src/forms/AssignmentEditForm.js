import React, { useState, useEffect } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";

const AssignmentEditForm = assignmentEditFormProps => {
  const [assignment, setAssignment] = useState({
    startTime: "",
    endTime: "",
    driverId: 1,
    vehicleId: 1,
    routeId: 1,
    dateId: 1
  });
  const [dates, setDates] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [date, setDate] = useState([]);
  const [route, setRoute] = useState([]);
  const [driver, setDriver] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  const handleAssignmentChange = event => {
    const stateToChange = { ...assignment };
    if (event.target.id === "startTime" || event.target.id === "endTime") {
      stateToChange[event.target.id] = event.target.value;
    } else {
      stateToChange[event.target.id] = parseInt(event.target.value);
    }
    setAssignment(stateToChange);
  };

  const getAssignment = () => {
    apiManager.getAssignmentById(assignmentEditFormProps.match.params.assignmentId)
      .then(assignment => {
        setAssignment(assignment);
      });
  };
  
  const getAllDropDowns = () => {
    return (
      apiManager.getType("dates").then(datesFromApi => {
        datesFromApi.sort((a, b) => (a.number > b.number ? -1 : 1));
        setDates(datesFromApi);
      }),
      apiManager.getType("routes").then(routesFromApi => {
        routesFromApi.sort((a, b) => (a.number > b.number ? 1 : -1));
        setRoutes(routesFromApi);
      }),
      apiManager.getType("drivers").then(driversFromApi => {
        driversFromApi.sort((a, b) => a.name.localeCompare(b.name));
        setDrivers(driversFromApi);
      }),
      apiManager.getType("vehicles").then(vehiclesFromApi => {
        vehiclesFromApi.sort((a, b) => a.company.localeCompare(b.company));
        setVehicles(vehiclesFromApi);
      })
    );
  };

  const getAllPrefills = () => {
    return (
      apiManager
        .getTypeWithId("dates", assignmentEditFormProps.match.params.dateId)
        .then(dateFromApi => {
          setDate(dateFromApi);
        }),
      apiManager
        .getTypeWithId("routes", assignmentEditFormProps.match.params.routeId)
        .then(routeFromApi => {
          setRoute(routeFromApi);
        }),
      apiManager
        .getTypeWithId("drivers", assignmentEditFormProps.match.params.driverId)
        .then(driverFromApi => {
          setDriver(driverFromApi);
        }),
      apiManager
        .getTypeWithId("vehicles", assignmentEditFormProps.match.params.vehicleId)
        .then(vehicleFromApi => {
          setVehicle(vehicleFromApi);
        })
    );
  };

  useEffect(() => {
    getAssignment();
    getAllPrefills();
    getAllDropDowns();
  }, []);

  const submit = () => {
    const editedAssignment = {
      id: assignmentEditFormProps.match.params.assignmentId,
      startTime: assignment.startTime,
      endTime: assignment.endTime,
      driverId: assignment.driverId,
      vehicleId: assignment.vehicleId,
      routeId: assignment.routeId,
      dateId: assignment.dateId
    };
    apiManager
      .updateType("assignments", editedAssignment)
      .then(() => assignmentEditFormProps.history.push("/home"));
  };

  return (
    <>
      <form>
        <fieldset className="form">
          <h3>Edit Assignement</h3>
          <div>
            <label>Driver: </label>
            <span>{driver.name} </span>
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
            <span>
              {vehicle.company} {vehicle.vehNumber}{" "}
            </span>
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
            <span>{route.number} </span>
            <select
              id="routeId"
              defaultValue={route.number}
              onChange={handleAssignmentChange}
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
            <span>{date.date} </span>
            <select
              defaultValue={date.date}
              id="dateId"
              onChange={handleAssignmentChange}
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
              defaultValue={assignment.startTime}
              type="time"
              onChange={handleAssignmentChange}
              id="startTime"
            />
          </div>

          <div>
            <label>End Time: </label>
            <input
              defaultValue={assignment.endTime}
              type="time"
              onChange={handleAssignmentChange}
              id="endTime"
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

export default AssignmentEditForm;
