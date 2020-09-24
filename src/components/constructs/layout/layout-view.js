import React from "react";

// Components
import SideNavigation from "../side-navigation";

const Layout = ({ children }) => (
  <Wrapper>
    <SideNavigation />
    {children}
  </Wrapper>
);

export default Layout;
