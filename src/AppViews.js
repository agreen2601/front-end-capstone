import { Route, Redirect } from "react-router-dom";
import React from "react";
// import Home from "./home/home";
import DriverForm from "./drivers/driverForm";
import AssignmentForm from "./assignmentForm"
import RouteList from "./RouteList";

const AppViews = appViewsProps => {
//   const hasUser = appViewsProps.hasUser;
//   const setUser = appViewsProps.setUser;

  return (
    <>
    <Route
        exact
        path="/home"
        render={appViewsProps => {
          return <RouteList {...appViewsProps} />;
        }}
      />
      <Route
        exact
        path="/driver/form"
        render={appViewsProps => {
          return <DriverForm {...appViewsProps} />;
        }}
      />
      <Route
        exact
        path="/assignment/form"
        render={appViewsProps => {
          return <AssignmentForm {...appViewsProps} />;
        }}
      />
    </>
  );
};

export default AppViews;
