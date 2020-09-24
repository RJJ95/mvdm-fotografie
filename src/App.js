import React from "react";
import { Router } from "@reach/router";

// Components
import Layout from "./components/constructs/layout";

// Pages
import Home from "./pages/home";

const App = () => (
  <Layout>
    <Router>
      <Home path="/" />
    </Router>
  </Layout>
);

export default App;
