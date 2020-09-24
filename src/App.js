import React from "react";
import { Router } from "@reach/router";

// Pages
import Home from "./pages/home";

const App = () => (
  <Router>
    <Home path="/" />
  </Router>
);

export default App;
