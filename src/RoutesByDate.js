import React, { useState, useEffect } from "react";
import RouteList from "./RouteList";
import apiManager from "./apiManager/apiManager";

const DateList = dateListProps => {
  const [dates, setDates] = useState([]);

  const getDates = () => {
    apiManager.getAssignments().then(APIResult => {
      setDates(APIResult);
    });
  };

  useEffect(() => {
    getDates();
  }, []);

  return (
    <>
      <div>Routes By Date</div>
      <div className="route_card">
        {dates.map(date => (
          <RouteList key={date.id} date={date} {...dateListProps} />
        ))}
      </div>
    </>
  );
};

export default DateList;
