import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import App from "./App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
