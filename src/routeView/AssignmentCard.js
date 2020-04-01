import React, { useEffect, useState } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaWheelchair } from "react-icons/fa";

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
  let ada = "";
  if (assignment[0] !== undefined) {
    realAssignment = assignment[0];
    realDriver = assignment[0].driver;
    realVehicle = assignment[0].vehicle;
    if (assignment[0].vehicle.capacity !== "") {
      pax = "pax ";
    }
    if (assignment[0].vehicle.isADA !== "") {
      ada = <FaWheelchair/>
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
            <span>
              {realAssignment.endTime} {"\u00A0"}
            </span>
            <span className="is_local">{realDriver.local}</span>
            <IoMdRemoveCircleOutline
              className="assignment_icon"
              onClick={() =>
                props.removeAssignment(
                  "assignments",
                  realAssignment.id,
                  props.date.id,
                  props.route.id
                )
              }
            />
            <FaExchangeAlt
              className="assignment_icon"
              onClick={() =>
                props.history.push(
                  `/edit/${realAssignment.id}/${props.route.id}/${realDriver.id}/${realVehicle.id}`
                )
              }
            />
            <FaRegEdit
              className="assignment_icon"
              onClick={() =>
                props.history.push(
                  `/editdriver/${realDriver.id}/${realVehicle.id}`
                )
              }
            />
          </div>
          <div>
            <span>
              {realVehicle.number} {"\u00A0"}
            </span>
            <span className="bold_driver_info">
              {realVehicle.company} {"\u00A0"}
            </span>
            <span>
              {realVehicle.capacity} {pax}
            </span>
            <span className="bold_driver_info">
              {realVehicle.type}
            </span>
            <span className="is_ada"> {"\u00A0"} {ada}</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignmentCard;
