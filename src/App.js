import React from "react";
import { Location, Router } from "@reach/router";

// Components
import Layout from "./components/constructs/layout";

// Pages
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";

// Config
import { PATHNAMES } from "./config/pathnames";

const App = () => (
  <Location>
    {({ location }) => (
      <Layout location={location}>
        <Router>
          <Home path={PATHNAMES.HOME} />
          <Portfolio path={PATHNAMES.CONCERT} />
          <Contact path={PATHNAMES.CONTACT} />
        </Router>
      </Layout>
    )}
  </Location>
);

export default App;
