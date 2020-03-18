import React, { useState, useEffect } from "react";
import DriverCard from "./driverCard";
import apiManager from "../apiManager/apiManager";

const DriverList = driverListProps => {
  const [drivers, setDrivers] = useState([]);

  const getDrivers = (type) => {
    apiManager.getTypeWithAssignments(type).then(APIResult => {
      setDrivers(APIResult);
    });
  };

  useEffect(() => {
    getDrivers("drivers");
  }, []);

  return (
    <div className="driver_card">
      {drivers.map(driver => (
        <DriverCard key={driver.id} driver={driver} {...driverListProps} />
      ))}
    </div>
  );
};

export default DriverList;
