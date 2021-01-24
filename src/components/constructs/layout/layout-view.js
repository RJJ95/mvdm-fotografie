import React, { useState } from "react";

// Config
import { PATHNAMES } from "../../../config/pathnames";

// Components
import SideNavigation from "../side-navigation";
import Footer from "../../constructs/footer";
import MobileNavigation from "../../constructs/mobile-navigation";

// Styles
import {
  Wrapper,
  Header,
  HeaderContainer,
  BodyContainer,
  FooterContainer,
} from "./layout-styles";

const Layout = ({ children, location }) => {
  const [showMenu, setShowMenu] = useState(isMobile() ? false : true);
  function isActive(path) {
    return location.pathname === path ? "true" : "false";
  }

  function isMobile() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true;
    } else {
      return false;
    }
  }

  function getNotification() {
    switch (location.pathname) {
      case PATHNAMES.CONCERT:
        return "FOTO’S VERKRIJGBAAR OP ACRYLGLAS (60x40). PRIJS OP AANVRAAG";
      case PATHNAMES.UITVAART:
        return "OMWILLE VAN PRIVACY WORDEN ER WEINIG FOTO'S VAN DE CATEGORIE 'UITVAART' GETOOND";
      default:
        return "";
    }
  }

  return (
    <Wrapper>
      <HeaderContainer>
        <Header active={isActive(PATHNAMES.HOME)} to={PATHNAMES.HOME}>
          MVDM Fotografie
        </Header>
      </HeaderContainer>
      <BodyContainer>
        <SideNavigation
          isMobile={isMobile()}
          notification={getNotification()}
          isActive={isActive}
          showMenu={showMenu}
        />
        {isMobile() && (
          <MobileNavigation showMenu={showMenu} setShowMenu={setShowMenu} />
        )}
        {children}
      </BodyContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Wrapper>
  );
};

export default Layout;
