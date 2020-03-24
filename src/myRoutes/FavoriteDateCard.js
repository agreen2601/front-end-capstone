import React, { useState, useEffect } from "../../node_modules/react";
import FavoriteRouteCard from "./FavoriteRouteCard";
import apiManager from "../apiManager/apiManager";

const FavoriteDateCard = props => {
  const [favRoute, setFavRoute] = useState([]);

  const getRoute = (type, id) => {
    apiManager.getTypeWithId(type, id).then(APIResult => {
      setFavRoute(APIResult);
    });
  };

  useEffect(() => {
    getRoute("routes", props.favoriteRouteID.routeId);
  }, []);

  return (
    <>
      <div className="route_card">
        <FavoriteRouteCard
          key={favRoute.id}
          favRoute={favRoute}
          unFavorite={props.unFavorite}
          {...props}
        />
      </div>
    </>
  );
};

export default FavoriteDateCard;
