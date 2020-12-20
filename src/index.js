import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
