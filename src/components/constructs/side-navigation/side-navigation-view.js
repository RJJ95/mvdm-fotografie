import React from "react";
import styled from "styled-components";

// Content
import { menuItems } from "./content";

// Components
import MenuItem from "../../primitives/menu-item"

const Wrapper = styled.nav`
  flex-basis: 15%;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

const SideNavigation = ({ isActive }) => {
  return (
    <Wrapper>
      {menuItems.map((item, i) => (
        <MenuItem key={i} to={item.path} active={isActive(item.path)}>
          {item.name}
        </MenuItem>
      ))}
    </Wrapper>
  );
};

export default SideNavigation;
