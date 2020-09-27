import React from "react";
import styled from "styled-components";

// Config
import { PATHNAMES } from "../../../config/pathnames";

// Components
import SideNavigation from "../side-navigation";
import MenuItem from "../../primitives/menu-item";
import Footer from "../../constructs/footer";
import Row from "../../primitives/row";

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`;

const Header = styled(MenuItem)`
  font-size: 54px;
`;

const HeaderContainer = styled.div`
  padding: 50px 0;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 50px 20px 10px 20px;
`;

const Layout = ({ children, location }) => {
  function isActive(path) {
    return location.pathname === path ? "true" : "false";
  }

  return (
    <Wrapper>
      <HeaderContainer>
        <Header active={isActive(PATHNAMES.HOME)} to={PATHNAMES.HOME}>
          MVDM Fotografie
        </Header>
      </HeaderContainer>
      <BodyContainer>
        <SideNavigation isActive={isActive} />
        {children}
      </BodyContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Wrapper>
  );
};

export default Layout;
