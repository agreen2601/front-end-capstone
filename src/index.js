import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import EventTranspoManager from "./EventTranspoManager";
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Router>
    <EventTranspoManager />
  </Router>,
  document.getElementById("root")
);
