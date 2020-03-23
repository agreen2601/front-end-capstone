import React, { useEffect, useState } from "react";

const DriverCard = props => {

  return (
    <div className="driver_border">
      <span>{props.driver.name} </span>
      <span>{props.driver.phoneNumber} </span>
      <span>{props.driver.fromCity} </span>
    </div>
  );
};

export default DriverCard;
