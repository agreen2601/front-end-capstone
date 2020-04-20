import { Route, Redirect } from "react-router-dom";
import React, { useState } from "react";
import Login from "./auth/Login";
import RouteView from "./routeView/RouteView";
import FavoriteRouteView from "./myRoutes/FavoriteRouteView";
import DriverList from "./drivers/DriverList";
import DriverForm from "./forms/DriverForm";
import VehicleForm from "./forms/VehicleForm";
import DriverEditForm from "./forms/DriverEditForm";
import VehicleEditForm from "./forms/VehicleEditForm";
import AssignmentForm from "./forms/AssignmentForm";
import AssignmentEditForm from "./forms/AssignmentEditForm";
import AssignmentAddForm from "./forms/AssignmentAddForm";
import RouteForm from "./forms/RouteForm";
import DateForm from "./forms/DateForm";
import RegisterForm from "./auth/RegisterForm";

const AppViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;
  const dates = props.dates;
  const chosenDate = props.chosenDate;
  const [driverId, setDriverId] = useState(1)
  const [vehicleId, setVehicleId] = useState(1)


  return (
    <>
      <Route
        exact
        path="/login"
        render={props => {
          if (hasUser) {
            return <Redirect to="/home" />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/register"
        render={props => {
          if (hasUser) {
            return <Redirect to="/home" />;
          } else {
            return <RegisterForm setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/routeview"
        render={props => {
          if (hasUser) {
            return (
              <RouteView dates={dates} chosenDate={chosenDate} {...props} />
            );
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/myroutes"
        render={props => {
          if (hasUser) {
            return (
              <FavoriteRouteView dates={dates} chosenDate={chosenDate} {...props} />
            );
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/driver/list"
        render={props => {
          if (hasUser) {
            return <DriverList dates={dates} chosenDate={chosenDate} {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/driver/form"
        render={props => {
          if (hasUser) {
            return <DriverForm setDriverId={setDriverId} {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/editdriver/:driverId(\d+)/:vehicleId(\d+)"
        render={props => {
          if (hasUser) {
            return <DriverEditForm {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/vehicle/form"
        render={props => {
          if (hasUser) {
            return <VehicleForm setVehicleId={setVehicleId} {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/editvehicle/:driverId(\d+)/:vehicleId(\d+)"
        render={props => {
          if (hasUser) {
            return <VehicleEditForm {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/assignment/form"
        render={props => {
          if (hasUser) {
            return <AssignmentForm driverId={driverId} vehicleId={vehicleId} chosenDate={chosenDate} {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/edit/:assignmentId(\d+)/:routeId(\d+)/:driverId(\d+)/:vehicleId(\d+)"
        render={props => {
          if (hasUser) {
            return <AssignmentEditForm chosenDate={chosenDate} {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/add/:routeId(\d+)"
        render={props => {
          if (hasUser) {
            return <AssignmentAddForm chosenDate={chosenDate} {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/route/form"
        render={props => {
          if (hasUser) {
            return <RouteForm {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/date/form"
        render={props => {
          if (hasUser) {
            return <DateForm {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
    </>
  );
};

export default AppViews;
