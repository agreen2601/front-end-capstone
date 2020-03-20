import React, { useEffect, useState } from "react";
import apiManager from "./apiManager/apiManager";

const AssignmentCard = props => {
  const [assignment, setAssignment] = useState([]);

  const getAssignment = (dateId, routeId, driverId) => {
    apiManager.getItemByDateRouteDriver(dateId, routeId, driverId).then(APIResult => {
      setAssignment(APIResult);
    });
  };

  useEffect(() => {
    getAssignment(props.date.id, props.route.id, props.assignment.driverId);
  }, []);

  let realAssignment = {}
  let realDriver = {}
  let realVehicle = {}
  let pax =""
  if (assignment[0] !== undefined){
    realAssignment = assignment[0]
    realDriver = assignment[0].driver
    realVehicle = assignment[0].vehicle
    pax = "pax "
  }

  return (
    <>
      <section className="driver_info">
        <div>
          <div>
            <span>{realDriver.name} {"\u00A0"}{" "}</span>
            <span>  {realVehicle.company} {"\u00A0"}{" "}</span>
            <span className="driver_phone_number">{realDriver.phoneNumber} {"\u00A0"}{"\u00A0"}</span>
            <span>{realAssignment.endTime} </span>
          </div>
          <div>
            <span>{realVehicle.vehNumber} </span>
            <span className="bold_driver_info">{realVehicle.company} {"\u00A0"}{" "}</span>
            <span>{realVehicle.capacity} {pax}</span>
            <span className="bold_driver_info">{realVehicle.type} {"\u00A0"}{" "}</span>
            <span className="is_ada">{realVehicle.isADA} </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignmentCard;
