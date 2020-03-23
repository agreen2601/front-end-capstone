import React, { useEffect, useState } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";
import AssignmentCard from "./AssignmentCard";

const RouteCard = props => {
  const [assignments, setAssignments] = useState([]);
  const [date, setDate] = useState([]);


  const getAssignments = (dateId, routeId) => {
    apiManager.getAssignmentsByDateRoute(dateId, routeId).then(APIResult => {
      setAssignments(APIResult);
    });
  };

  const getDate = (type, id) => {
    apiManager.getTypeWithId(type, id).then(APIResult => {
      setDate(APIResult);
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
    getAssignments(props.date.id, props.route.id);
    getDate("dates", props.date.id)
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
      <div>
        {assignments.map(assignment => (
          <AssignmentCard
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

export default RouteCard;
