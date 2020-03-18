import React, { useEffect, useState } from "react";
import apiManager from "./apiManager/apiManager";

const AssignmentCard = assignmentCardProps => {
  const [driver, setDriver] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  const getDriver = (type, id) => {
    apiManager.getSingleItem(type, id).then(APIResult => {
      setDriver(APIResult);
    });
  };

  const getVehicle = (type, id) => {
    apiManager.getSingleItem(type, id).then(APIResult => {
      setVehicle(APIResult);
    });
  };

  useEffect(() => {
    getDriver("drivers", assignmentCardProps.assignment.driverId);
    getVehicle("vehicles", assignmentCardProps.assignment.vehicleId);
  }, []);

  let isVehADA = "ADA Error";

  const isADA = () => {
    if (vehicle.isADA === true) {
      isVehADA = "ADA accesible";
    } else {
      isVehADA = "";
    }
  };
  isADA();

  return (
    <>
      <span>{driver.name} </span>
      <span>{driver.phoneNumber} </span>
      <span>{vehicle.company} </span>
      <span>{vehicle.vehNumber}</span>
      <br></br>
      <span>{vehicle.capacity} pax </span>
      <span>{isVehADA} </span>
      <span>{(assignmentCardProps.assignment.date).split("T", 1)} </span>
      <span>{assignmentCardProps.assignment.startTime} - </span>
      <span>{assignmentCardProps.assignment.endTime}</span>
      <hr></hr>
    </>
  );
};

export default AssignmentCard;
