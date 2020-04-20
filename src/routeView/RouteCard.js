import React, { useEffect, useState } from "../../node_modules/react";
import apiManager from "../apiManager/apiManager";
import AssignmentCard from "./AssignmentCard";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { IoMdAddCircleOutline } from "react-icons/io";

const RouteCard = props => {
  const [assignments, setAssignments] = useState([]);
  const [favoriteRouteIDs, setFavoriteRouteIDs] = useState([]);
  const [favId, setFavId] = useState([]);
  const [favorite, setFavorite] = useState({
    userId: parseInt(sessionStorage.getItem("userId")),
    routeId: props.route.id
  });
  const userId = sessionStorage.getItem("userId")

  const getFavoriteRoutes = (userID) => {
    apiManager.getFavorites(userID).then(favs => {
      const match = favs.find(fav => fav.routeId === props.route.id);
      if (match !== undefined) {
        setFavoriteRouteIDs(match.routeId);
        setFavId(match.id);
      }
    });
  };

  getFavoriteRoutes(userId)

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
    getFavoriteRoutes(userId);
  };

  const unStar = () => {
    apiManager.deleteTypeWithId("favoriteRoutes", favId)
    getFavoriteRoutes(userId);
  };

  useEffect(() => {
    getAssignments(props.date.id, props.route.id);
  }, [props.date.id, props.route.id, userId]);

  const routeHeader = {
    color: props.route.color,
    fontSize: "larger",
    fontWeight: 600,
    marginRight: "20px"
  };

  const routeBorder = {
    borderColor: props.route.color
  };

  let routeNumber = props.route.number;
  if (props.route.number.startsWith("0")) {
    routeNumber = props.route.number.split("0")[1];
  }

  return (
    <>
      <div style={routeBorder} className="route_border">
        <div className="route_heading">
          <span style={routeHeader}>Route {routeNumber} </span>
          <span className="assigned">
            ({assignments.length} assigned -{"\u00A0"}
            {props.route.numOfVehNeeded - assignments.length} needed)
          </span>
          {favoriteRouteIDs.length !== 0 ? (
            <IoIosStar className="route_icon" id-="unStar" onClick={unStar} />
          ) : null}
          {favoriteRouteIDs.length === 0 ? (
            <IoIosStarOutline className="route_icon" id="star" onClick={star} />
          ) : null}
        </div>
        <IoMdAddCircleOutline
          className="add_driver_icon"
          onClick={() => props.history.push(`/add/${props.route.id}`)}
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
    </>
  );
};

export default RouteCard;
