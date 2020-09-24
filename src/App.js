import React from "react";
import { Location, Router } from "@reach/router";

// Components
import Layout from "./components/constructs/layout";

// Pages
import Home from "./pages/home";

// Config
import { PATHNAMES } from "./config/pathnames";

const App = () => (
  <Location>
    {({ location }) => (
      <Layout location={location}>
        <Router>
          <Home path={PATHNAMES.HOME} />
        </Router>
      </Layout>
    )}
  </Location>
);

export default App;
