import React, { useEffect, useState } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";
import AssignmentCard from "./AssignmentCard";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";

const RouteCard = props => {
  const [assignments, setAssignments] = useState([]);
  const [favorite, setFavorite] = useState({
    userId: parseInt(sessionStorage.getItem("userId")),
    routeId: props.route.id
  });

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

  const star = () => {
    apiManager.addType("favoriteRoutes", favorite).then(APIResult => {
      setFavorite(APIResult);
    });
  };

  useEffect(() => {
    getAssignments(props.date.id, props.route.id);
  }, []);

  const routeStyle = {
    color: props.route.color,
    fontSize: "larger",
    fontWeight: 600,
    marginRight: "20px"
  };

  const routeBorder = {
    borderColor: props.route.color
  };

  return (
    <div style={routeBorder} className="route_border">
      <div className="route_heading">
        <span style={routeStyle}>Route {props.route.number} </span>
        <span className="assigned">
          ({assignments.length} assigned -{"\u00A0"}
          {props.route.numOfVehNeeded - assignments.length} needed)
        </span>
        <IoIosStarOutline className="route_icon" onClick={star} />
      </div>
      <IoMdAddCircleOutline
        className="add_driver_icon"
        onClick={() =>
          props.history.push(`/add/${props.date.id}/${props.route.id}`)
        }
      />
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
