import React, { useEffect, useState } from "react";
import apiManager from "../apiManager/apiManager";
import FavoriteDateCard from "./FavoriteDateCard";

const FavoriteRouteIDs = props => {
  const [favoriteRouteIDs, setFavoriteRouteIDs] = useState([]);

  const getFavoriteRoutes = userid => {
    apiManager.getFavorites(userid).then(APIResult => {
      APIResult.sort((a, b) => (a.route.number > b.route.number ? 1 : -1));
      setFavoriteRouteIDs(APIResult);
    });
  };

  useEffect(() => {
    getFavoriteRoutes(parseInt(sessionStorage.getItem("userId")));
  }, []);

console.log("Ids", favoriteRouteIDs)

  return (
    <>
    <div className="route_card">
      {favoriteRouteIDs.map(favoriteRouteID => (
        <FavoriteDateCard key={favoriteRouteID.routeId} favoriteRouteID={favoriteRouteID} {...props} />
      ))}
    </div>
  </>
  );
};

export default FavoriteRouteIDs;
