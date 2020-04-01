import { Route, Redirect } from "react-router-dom";
import React from "react";
import Login from "./auth/Login";
import RouteView from "./routeView/RouteView";
import FavoriteRouteView from "./myRoutes/FavoriteRouteView"
import DriverList from "./drivers/DriverList";
import DriverForm from "./forms/DriverForm";
import DriverEditForm from "./forms/DriverEditForm";
import AssignmentForm from "./forms/AssignmentForm";
import AssignmentEditForm from "./forms/AssignmentEditForm";
import AssignmentAddForm from "./forms/AssignmentAddForm";
import RouteForm from "./forms/RouteForm";
import DateForm from "./forms/DateForm"
import RegisterForm from "./auth/RegisterForm"

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
        path="/routeview/:dateID(\d+)"
        render={props => {
          if (hasUser) {
            return <RouteView {...props} />;
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
            return <DriverList {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/myroutes/:dateID(\d+)"
        render={props => {
          if (hasUser) {
            return <FavoriteRouteView {...props} />;
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
            return <DriverForm {...props} />;
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
            return <AssignmentForm {...props} />;
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
      <Route
        exact
        path="/edit/:dateId(\d+)/:driverId(\d+)/:vehicleId(\d+)"
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
        path="/edit/:assignmentId(\d+)/:dateId(\d+)/:routeId(\d+)/:driverId(\d+)/:vehicleId(\d+)"
        render={props => {
          if (hasUser) {
            return <AssignmentEditForm {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
      <Route
        exact
        path="/add/:dateId(\d+)/:routeId(\d+)"
        render={props => {
          if (hasUser) {
            return <AssignmentAddForm {...props} />;
          } else {
            return <Login setUser={setUser} {...props} />;
          }
        }}
      />
    </>
  );
};

// props.history.push(`/add/${props.date.id}/${props.route.id}`)


export default AppViews;
