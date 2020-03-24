import React, { useEffect, useState } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";
import FavoriteAssignmentCard from "./FavoriteAssignmentCard";

const FavoriteRouteCard = props => {
  const [assignments, setAssignments] = useState([]);

  const getAssignments = (dateId, routeId) => {
    apiManager.getAssignmentsByDateRoute(dateId, routeId).then(APIResult => {
      setAssignments(APIResult);
    });
  };

  const removeAssignment = (type, id, dateId, routeId) => {
    apiManager.deleteTypeWithId(type, id).then(() =>
      apiManager.getAssignmentsByDateRoute(dateId, routeId).then(APIResult => {
        setAssignments(APIResult);
      })
    );
  };

  useEffect(() => {
    getAssignments(props.date.id, props.favRoute.id);
  }, []);

  const routeStyle = {
    color: props.favRoute.color,
    fontSize: "larger",
    fontWeight: 600,
    marginRight: "30px"
  };

  const routeBorder = {
    borderColor: props.favRoute.color
  };

  return (
    <div style={routeBorder} className="route_border">
      <span style={routeStyle}>Route {props.favRoute.number} </span>
      <span>
        {assignments.length} assigned -{" "}
        {props.favRoute.numOfVehNeeded - assignments.length} needed
      </span>
      <button
        className="mine_button"
        onClick={() => props.unFavorite("favoriteRoutes", props.favoriteRouteID.id)}
      >
        Unfavorite
      </button>
      <div>
        {assignments.map(assignment => (
          <FavoriteAssignmentCard
            key={assignment.id}
            assignment={assignment}
            removeAssignment={removeAssignment}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteRouteCard;
