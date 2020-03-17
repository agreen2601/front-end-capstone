import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import EventTranspoManager from "./EventTranspoManager";

ReactDOM.render(
  <Router>
    <EventTranspoManager />
  </Router>,
  document.getElementById("root")
);
