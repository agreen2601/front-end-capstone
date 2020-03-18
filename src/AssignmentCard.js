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
      isVehADA = "ADA";
    } else {
      isVehADA = "";
    }
  };
  isADA();

  return (
    <>
      <section className="driver_info">
        <div>
        <span>
              {assignmentCardProps.assignment.date.split("-").splice(1).join("-").split("T")[0]}{" "}
            </span>
          <div>
            <span>{driver.name} {'\u00A0'} </span>
            <span className="driver_phone_number">{driver.phoneNumber} {'\u00A0'}{'\u00A0'}</span>
            <span>{assignmentCardProps.assignment.endTime} </span>
          </div>
          <div>
            <span>{vehicle.vehNumber} </span>
            <span className="bold_driver_info">{vehicle.company} {'\u00A0'} </span>
            <span>{vehicle.capacity} pax </span>
            <span className="bold_driver_info">{vehicle.type} {'\u00A0'} </span>
            <span>{assignmentCardProps.assignment.startTime} - </span>
            <span className="is_ada">{isVehADA} </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssignmentCard;
