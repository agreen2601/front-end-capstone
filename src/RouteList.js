import React, { useState, useEffect } from "react";
import RouteCard from "./RouteCard";
import apiManager from "./apiManager/apiManager";

const RouteList = props => {
  const [routes, setRoutes] = useState([]);

  const getRoutes = type => {
    apiManager.getType(type).then(APIResult => {
      setRoutes(APIResult);
    });
  };

  useEffect(() => {
    getRoutes("routes");
  }, []);

  return (
    <>
      <div>{props.date.date}</div>
      <div className="route_card">
        {routes.map(route => (
          <RouteCard key={route.id} route={route} {...props} />
        ))}
      </div>
    </>
  );
};

export default RouteList;
