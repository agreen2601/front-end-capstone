import React, { useState, useEffect } from "../../node_modules/react";
import RouteCard from "./RouteCard";
import apiManager from "../apiManager/apiManager";

const DateCard = props => {
  const [routes, setRoutes] = useState([]);

  const getRoutes = type => {
    apiManager.getType(type).then(APIResult => {
      APIResult.sort((a, b) => (a.number > b.number ? 1 : -1));
      setRoutes(APIResult);
    });
  };

  useEffect(() => {
    getRoutes("routes");
  }, []);

  return (
    <>
      <div className="route_card">
        {routes.map(route => (
          <RouteCard key={route.id} route={route} {...props} />
        ))}
      </div>
    </>
  );
};

export default DateCard;
