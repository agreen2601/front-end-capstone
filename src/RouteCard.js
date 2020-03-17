import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
// import { Link } from "react-router-dom";
// import apiManager from "./apiManager/apiManager";

const RouteCard = routeCardProps => {
  // const [driver, setDriver] = useState({});
  // const [routes, setRoutes] = useState([]);

  // const getAssign = id => {
  //     apiManager.getDriverRoute(routeCardProps.match.params.driverId).then(
  //         APIResult => {
  //             setDriver(APIResult);
  //         }
  //     );
  // };

  // useEffect(() => {
  //     apiManager.getDriverRoute(routeCardProps.match.params.driverId).then(
  //         APIResult => {
  //             setDriver(APIResult);
  //             setRoutes(APIResult.routes);
  //         }
  //     );
  // }, []);

  let isVehADA = "ADA Error";

  const isADA = () => {
    if (routeCardProps.assignment.vehicle.isADA == true) {
      isVehADA = "ADA accesible";
    } else {
      isVehADA = "";
    }
  };
  isADA();

  let routeStyle = {
      color: routeCardProps.assignment.route.color,
      fontSize: "larger"
  }

  return (
    <>
      <span style={routeStyle}>{routeCardProps.assignment.route.number} </span>
      <span>{routeCardProps.assignment.date} </span>
      <br></br>
      <span>{routeCardProps.assignment.driver.name} </span>
      <span>{routeCardProps.assignment.driver.phoneNumber} </span>
      <br></br>
      <span>{routeCardProps.assignment.vehicle.company} </span>
      <span>{routeCardProps.assignment.vehicle.vehNumber} </span>
      <br></br>
      <span>{routeCardProps.assignment.vehicle.capacity} pax </span>
      <span>{isVehADA}</span>
      <br></br>
      <span>{routeCardProps.assignment.startTime} - </span>
      <span>{routeCardProps.assignment.endTime}</span>

      <hr></hr>
    </>
  );
};

export default RouteCard;
