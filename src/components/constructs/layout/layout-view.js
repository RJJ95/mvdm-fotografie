import React from "react";
import styled from "styled-components";

// Config
import { PATHNAMES } from "../../../config/pathnames";

// Components
import SideNavigation from "../side-navigation";
import MenuItem from "../../primitives/menu-item";
import Footer from "../../constructs/footer";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-bottom: 20px;
  width: 90%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Header = styled(MenuItem)`
  font-size: 54px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LayoutContainer = styled.div``;

const HeaderContainer = styled.div`
  margin-bottom: 50px;
  margin-top: 50px;
`;

const Layout = ({ children, location }) => {
  function isActive(path) {
    return location.pathname === path ? "true" : "false";
  }

  return (
    <Wrapper>
      <LayoutContainer>
        <HeaderContainer>
          <Header active={isActive(PATHNAMES.HOME)} to={PATHNAMES.HOME}>
            MVDM Fotografie
          </Header>
        </HeaderContainer>
        <Container>
          <SideNavigation isActive={isActive} />
          {children}
        </Container>
        <Footer />
      </LayoutContainer>
    </Wrapper>
  );
};

export default Layout;
