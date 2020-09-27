import React from "react";
import styled from "styled-components";

// Content
import { menuItems } from "./content";

// Components
import MenuItem from "../../primitives/menu-item";
import Row from "../../primitives/row";

// Styles
import { InstagramIcon, FacebookIcon, SocialContainer, Wrapper, Notification } from "./side-navigation-styles";

const SideNavigation = ({ isActive, notification }) => {
  return (
    <Wrapper>
      {menuItems.map((item, i) => (
        <MenuItem key={i} to={item.path} active={isActive(item.path)}>
          {item.name}
        </MenuItem>
      ))}
      <Row>
        <a>{<InstagramIcon />}</a>
        <a>{<FacebookIcon />}</a>
      </Row>
      <Notification>{notification}</Notification>
    </Wrapper>
  );
};

export default SideNavigation;
