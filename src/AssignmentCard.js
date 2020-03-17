import React, { useEffect } from "react";
// import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
// import apiManager from "./apiManager/apiManager";

const AssignmentCard = assignmentCardProps => {
  // const [driver, setDriver] = useState({});
  // const [routes, setRoutes] = useState([]);

  // const getAssign = id => {
  //     apiManager.getDriverRoute(assignmentCardProps.match.params.driverId).then(
  //         APIResult => {
  //             setDriver(APIResult);
  //         }
  //     );
  // };

  // useEffect(() => {
  //     apiManager.getDriverRoute(assignmentCardProps.match.params.driverId).then(
  //         APIResult => {
  //             setDriver(APIResult);
  //             setRoutes(APIResult.routes);
  //         }
  //     );
  // }, []);

  let isVehADA = "ADA Error";

  const isADA = () => {
    if (assignmentCardProps.assignment.vehicle.isADA === true) {
      isVehADA = "ADA accesible";
    } else {
      isVehADA = "";
    }
  };
  isADA();

  let routeStyle = {
      color: assignmentCardProps.assignment.route.color,
      fontSize: "larger"
  }

  console.log(assignmentCardProps.assignment)

  return (
    <>
      <span style={routeStyle}>{assignmentCardProps.assignment.route.number} </span>
      <span>{assignmentCardProps.assignment.date} </span>
      <br></br>
      <span>{assignmentCardProps.assignment.driver.name} </span>
      <span>{assignmentCardProps.assignment.driver.phoneNumber} </span>
      <br></br>
      <span>{assignmentCardProps.assignment.vehicle.company} </span>
      <span>{assignmentCardProps.assignment.vehicle.vehNumber} </span>
      <br></br>
      <span>{assignmentCardProps.assignment.vehicle.capacity} pax </span>
      <span>{isVehADA}</span>
      <br></br>
      <span>{assignmentCardProps.assignment.startTime} - </span>
      <span>{assignmentCardProps.assignment.endTime}</span>

      <hr></hr>
    </>
  );
};

export default AssignmentCard;
