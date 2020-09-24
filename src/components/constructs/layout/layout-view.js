import React from "react";
import styled from "styled-components";

// Config
import { PATHNAMES } from "../../../config/pathnames";

// Components
import SideNavigation from "../side-navigation";
import MenuItem from "../../primitives/menu-item"

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-bottom: 50px;
`;

const Header = styled(MenuItem)`
  font-size: 54px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

const Layout = ({ children, location }) => {
  function isActive(path) {
    return location.pathname === path ? "true" : "false";
  }

  return (
    <Wrapper>
      <Header active={isActive(PATHNAMES.HOME)} to={PATHNAMES.HOME}>
        MVDM Fotografie
      </Header>
      <Container>
        <SideNavigation isActive={isActive} />
        {children}
      </Container>
    </Wrapper>
  );
};

export default Layout;
