import React from "react";

import { MenuButton } from "./mobile-navigation-style";

const MobileNavigation = ({ setShowMenu, showMenu }) => (
  <MenuButton onClick={() => setShowMenu(!showMenu)} />
);

export default MobileNavigation;
