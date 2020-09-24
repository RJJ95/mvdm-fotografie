import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

// Content
import { menuItems } from "./content";

// Styles
const Header = styled(Link)``;

const MenuItem = styled(Link)``;

const SideNavigation = () => (
  <Wrapper>
    <Header>MVDM Fotografie</Header>
    {menuItems.map((item) => (
      <MenuItem to={item.path}>{item.name}</MenuItem>
    ))}
  </Wrapper>
);

export default SideNavigation;
