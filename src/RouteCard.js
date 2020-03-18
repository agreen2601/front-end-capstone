import React, { useEffect, useState } from "react";
import apiManager from "./apiManager/apiManager";
import AssignmentCard from "./AssignmentCard";

const RouteCard = routeCardProps => {
  const [assignments, setAssignments] = useState([]);

  const getRoutesInfo = id => {
    apiManager.getRoutesWithId(id).then(APIResult => {
      setAssignments(APIResult.assignments);
    });
  };

  useEffect(() => {
    getRoutesInfo(routeCardProps.route.id);
  }, []);

  let routeStyle = {
    color: routeCardProps.route.color,
    fontSize: "larger"
  };

  return (
    <>
      <div style={routeStyle}>{routeCardProps.route.number} </div>
      <div>
        {assignments.map(assignment => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
      <hr></hr>
    </>
  );
};

export default RouteCard;
