import React from "react";

// Content
import { menuItems } from "./content";

// Components
import MenuItem from "../../primitives/menu-item";
import Row from "../../primitives/row";

// Styles
import {
  InstagramIcon,
  FacebookIcon,
  Wrapper,
  Notification,
} from "./side-navigation-styles";

const SideNavigation = ({ isActive, notification, showMenu }) => {
  return (
    <Wrapper showMenu={showMenu}>
      {menuItems.map((item, i) => (
        <MenuItem key={i} to={item.path} active={isActive(item.path)}>
          {item.name}
        </MenuItem>
      ))}
      <Row>
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/marc_maas"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.facebook.com/marc.vandermaas"
          target="_blank"
        >
          <FacebookIcon />
        </a>
      </Row>
      <Notification>{notification}</Notification>
    </Wrapper>
  );
};

export default SideNavigation;
