import React from "../../node_modules/react";
import DateCard from "./DateCard";

const RouteView = props => {
  const dates = props.dates;
  const chosenDate = props.chosenDate;

  return (
      <div className="date_card">
        {dates
          .filter(date => date.id === chosenDate)
          .map(date => (
            <DateCard key={date.id} date={date} {...props} />
          ))}
      </div>
  );
};

export default RouteView;
