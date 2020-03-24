import React, { useState, useEffect } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";

const AssignmentForm = assignmentFormProps => {
  const [assignment, setAssignment] = useState({
    startTime: "",
    endTime: "",
    driverId: 1,
    vehicleId: 1,
    routeId: 1,
    dateId: 1
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

  // const handleRegister = evt => {
  //   evt.preventDefault();
  //   apiManager.getUsers().then(users => {
  //     const user = users.find(user => user.email === credentials.email);
  //     if (user === undefined) {
  //       setCredentials("credentials");
  //       apiManager.addType("users", credentials);
  //       apiManager.getUsers().then(users => {
  //         const newUser = users.find(
  //           newUser => newUser.email === credentials.email
  //         );
  //         sessionStorage.setItem("userId", newUser.id);
  //         props.setUser(credentials);
  //         props.history.push("/home");
  //       });
  //     } else {
  //       window.alert("There is already an account associated with this email address.");
  //     }
  //   });
  // };

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
    apiManager
      .addType("assignments", assignment)
      .then(() => assignmentFormProps.history.push("/home"));
  };

  return (
    <>
      <form>
        <h3>Creat New Assignment</h3>
        <fieldset className="form">
          <div>
            <label>Driver: </label>
            <select
              id="driverId"
              onChange={handleAssignmentChange}
              placeholder="pick"
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
            <select id="vehicleId" onChange={handleAssignmentChange}>
              {vehicles.map(vehicle => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.company}
                </option>
              ))}
            </select>
            <label> # </label>
            <select id="vehicleId" onChange={handleAssignmentChange}>
              {vehicles.map(vehicle => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.vehNumber}
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
            <label>Date: </label>
            <select id="dateId" onChange={handleAssignmentChange}>
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
