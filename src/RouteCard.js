import React, { useEffect, useState } from "react";
import apiManager from "./apiManager/apiManager";
import AssignmentCard from "./AssignmentCard";

const RouteCard = routeCardProps => {
  const [assignments, setAssignments] = useState([]);

  const getRoutesInfo = (type, id) => {
    apiManager.getTypeWithId(type, id).then(APIResult => {
      setAssignments(APIResult.assignments);
    });
  };

  useEffect(() => {
    getRoutesInfo("routes", routeCardProps.route.id);
  }, []);

  const routeStyle = {
    color: routeCardProps.route.color,
    fontSize: "larger",
    fontWeight: 600,
    marginRight: "30px"
  };

  const routeBorder = {
    borderColor: routeCardProps.route.color
  };

  return (
    <div style={routeBorder} className="route_border">
      <span style={routeStyle}>Route {routeCardProps.route.number} </span>
      <span>
        {assignments.length} assigned -{" "}
        {routeCardProps.route.numOfVehNeeded - assignments.length} needed
      </span>
      <div>
        {assignments.map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default RouteCard;
