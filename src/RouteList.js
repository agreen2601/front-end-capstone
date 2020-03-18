import React, { useState, useEffect } from "react";
import RouteCard from "./RouteCard";
import apiManager from "./apiManager/apiManager";

const RouteList = routeListProps => {
  const [routes, setRoutes] = useState([]);

  const getRoutes = () => {
    apiManager.getRoutesWithAssignments().then(APIResult => {
      setRoutes(APIResult);
    });
  };

  useEffect(() => {
    getRoutes("routes");
  }, []);

  return (
    <>
      <div>
        {routes.map(route => (
          <RouteCard key={route.id} route={route} {...routeListProps} />
        ))}
      </div>
    </>
  );
};

export default RouteList;
