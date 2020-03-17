import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/home";
import DriverForm from "./drivers/driverForm";
import VehicleForm from "./vehicleForm"
import RouteList from "./RouteList";

const AppViews = appViewsProps => {
  const hasUser = appViewsProps.hasUser;
  const setUser = appViewsProps.setUser;

  return (
    <>
      {/* <Route
        exact
        path="/home"
        render={appViewsProps => {
          return <Home />;
        }}
      /> */}
      <Route
        exact
        path="/driver/form"
        render={appViewsProps => {
          return <DriverForm {...appViewsProps} />;
        }}
      />
      <Route
        exact
        path="/home"
        render={appViewsProps => {
          return <RouteList {...appViewsProps} />;
        }}
      />
    </>
  );
};

export default AppViews;
