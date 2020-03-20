import React, { useState, useEffect } from "react";
import RouteList from "./RouteList";
import apiManager from "./apiManager/apiManager";

const DateList = props => {
  const [dates, setDates] = useState([]);

  const getDates = type => {
    apiManager.getType(type).then(APIResult => {
      setDates(APIResult);
    });
  };

  useEffect(() => {
    getDates("dates");
  }, []);

  return (
    <>
      <div>Routes By Date</div>
      <div className="date_card">
        {dates.map(date => (
          <RouteList key={date.id} date={date} {...props} />
        ))}
      </div>
    </>
  );
};

export default DateList;
