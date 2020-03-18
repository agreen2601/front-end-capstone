import React, { useEffect, useState } from "react";
import apiManager from "../apiManager/apiManager";
// import AssignmentCard from "./AssignmentCard";

const DriverCard = driverCardProps => {
  const [drivers, setDrivers] = useState([]);

  const getDriversInfo = (type, id) => {
    apiManager.getTypeWithId(type, id).then(APIResult => {
      setDrivers(APIResult);
    });
  };

  console.log("drivers", drivers);

  useEffect(() => {
    getDriversInfo("drivers", driverCardProps.driver.id);
  }, []);

  return (
    <div className="driver_border">
      <span>{driverCardProps.driver.name}</span>
      <span>{driverCardProps.driver.assignments[0].routeId}</span>
    </div>
  );
};

export default DriverCard;
