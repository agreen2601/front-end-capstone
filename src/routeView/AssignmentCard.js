import React, { useEffect, useState } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";

const AssignmentCard = props => {
  const [assignment, setAssignment] = useState([]);

  const getAssignment = (dateId, routeId, driverId) => {
    apiManager
      .getAssignmentByDateRouteDriver(dateId, routeId, driverId)
      .then(APIResult => {
        setAssignment(APIResult);
      });
  };

  useEffect(() => {
    getAssignment(props.date.id, props.route.id, props.assignment.driverId);
  }, []);

  let realAssignment = {};
  let realDriver = {};
  let realVehicle = {};
  let pax = "";
  if (assignment[0] !== undefined) {
    realAssignment = assignment[0];
    realDriver = assignment[0].driver;
    realVehicle = assignment[0].vehicle;
    if (assignment[0].vehicle.capacity !== "") {
      pax = "pax ";
    }
  }

  return (
    <>
      <section className="driver_info">
        <div>
          <div>
            <span>
              {realDriver.name} {"\u00A0"}
            </span>
            <span className="driver_phone_number">
              {realDriver.phoneNumber} {"\u00A0"}
            </span>
            <span>{realAssignment.endTime} </span>
          </div>
          <div>
            <span>{realVehicle.vehNumber} </span>
            <span className="bold_driver_info">
              {realVehicle.company} {"\u00A0"}
            </span>
            <span>
              {realVehicle.capacity} {pax}
            </span>
            <span className="bold_driver_info">
              {realVehicle.type} {"\u00A0"}
            </span>
            <span className="is_ada">{realVehicle.isADA} </span>
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                props.history.push(`/edit/${realDriver.id}/${realVehicle.id}`)
              }
            >
              Edit Info
            </button>
            <button
              type="button"
              onClick={() =>
                props.history.push(
                  `/edit/${realAssignment.id}/${props.date.id}/${props.route.id}/${realDriver.id}/${realVehicle.id}`
                )
              }
            >
              Edit Assignment
            </button>
            <button
              type="button"
              onClick={() => props.removeAssignment("assignments", realAssignment.id, props.date.id, props.route.id)}
            >
              Remove
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignmentCard;
