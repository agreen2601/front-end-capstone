import React, { useState, useEffect } from "../../node_modules/react";
import FavoriteRoutes from "./FavoritesRouteIDs";
import apiManager from "../apiManager/apiManager";

const FavoriteRouteView = props => {
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
            <FavoriteRoutes key={date.id} date={date} {...props} />
          ))}
      </div>
    </>
  );
};

export default FavoriteRouteView;
