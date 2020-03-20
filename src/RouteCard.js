import React, { useEffect, useState } from "react";
import apiManager from "./apiManager/apiManager";
import AssignmentCard from "./AssignmentCard";

const RouteCard = props => {
  const [assignments, setAssignments] = useState([]);

  const getAssignments = (id) => {
    apiManager.getAssignmentsByDateExpanded(id).then(APIResult => {
      setAssignments(APIResult);
    });
  };

  useEffect(() => {
    getAssignments(props.date.id);
  }, []);

  const routeStyle = {
    color: props.route.color,
    fontSize: "larger",
    fontWeight: 600,
    marginRight: "30px"
  };

  const routeBorder = {
    borderColor: props.route.color
  };

  return (
    <div style={routeBorder} className="route_border">
      <span style={routeStyle}>Route {props.route.number} </span>
      <span>
        {assignments.length} assigned -{" "}
        {props.route.numOfVehNeeded - assignments.length} needed
      </span>
      <div></div>
      <div>
        {assignments.map(assignment => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};

export default RouteCard;

{/* ]<div>
        {assignments.map(assignment => (
          props.route.assignments.map(assignment3 => {
            if (assignment3.dateId === assignment.dateId) {
            return <AssignmentCard key={assignment.id} assignment={assignment} {...props} />
            }
          })
        ))}
      </div> */}