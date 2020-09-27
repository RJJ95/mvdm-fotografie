import React from "react";
import styled from "styled-components";

const FooterText = styled.p`
  text-transform: uppercase;
  color: grey;
  font-weight: 600;
  text-align: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

const Footer = () => (
  <FooterText>
    Neem voor interesse of vragen contact per
    {<Link href="mailto:marcvandermaas68@gmail.com"> mail</Link>} op
  </FooterText>
);

export default Footer;
