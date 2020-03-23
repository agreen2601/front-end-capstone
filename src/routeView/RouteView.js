import React, { useState, useEffect } from "../../node_modules/react";
import DateCard from "./DateCard";
import apiManager from "../apiManager/apiManager";
import "../styles.css";

const RouteView = props => {
  const [dates, setDates] = useState([]);
  const [chosenDate, setChosenDate] = useState(1);

  const getDates = type => {
    apiManager.getType(type).then(APIResult => {
      setDates(APIResult);
    });
  };

  useEffect(() => {
    getDates("dates");
  }, []);

  const handleDateChange = event => {
    const dateId = parseInt(event.target.value);
    setChosenDate(dateId);
  };

  return (
    <>
      <div>
        <label>Date: </label>
        <select id="dateId" onChange={handleDateChange}>
          {dates.map(date => (
            <option key={date.id} value={date.id}>
              {date.date}
            </option>
          ))}
        </select>
      </div>
      <div className="date_card">
        {dates
          .filter(date => date.id === chosenDate)
          .map(date => (
            <DateCard key={date.id} date={date} {...props} />
          ))}
      </div>
    </>
  );
};

export default RouteView;
