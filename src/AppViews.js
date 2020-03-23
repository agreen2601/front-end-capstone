import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./Login";
import RouteView from "./routeView/RouteView";
import DriverList from "./drivers/DriverList";
import DriverForm from "./forms/DriverForm";
import AssignmentForm from "./forms/AssignmentForm";
import RouteForm from "./forms/RouteForm";
import DriverEditForm from "./forms/DriverEditForm";
import AssignmentEditForm from "./forms/AssignmentEditForm"

const AppViews = props => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

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
        path="/home"
        render={props => {
          return <RouteView {...props} />;
        }}
      />
      <Route
        exact
        path="/driver/list"
        render={props => {
          return <DriverList {...props} />;
        }}
      />
      <Route
        exact
        path="/driver/form"
        render={props => {
          return <DriverForm {...props} />;
        }}
      />
      <Route
        exact
        path="/assignment/form"
        render={props => {
          return <AssignmentForm {...props} />;
        }}
      />
      <Route
        exact
        path="/route/form"
        render={props => {
          return <RouteForm {...props} />;
        }}
      />
      <Route
        exact
        path="/edit/:driverId(\d+)/:vehicleId(\d+)"
        render={props => {
          return <DriverEditForm {...props} />;
        }}
      />
      <Route
        exact
        path="/edit/:assignmentId(\d+)/:dateId(\d+)/:routeId(\d+)/:driverId(\d+)/:vehicleId(\d+)"
        render={props => {
          return <AssignmentEditForm {...props} />;
        }}
      />
    </>
  );
};

export default AppViews;
