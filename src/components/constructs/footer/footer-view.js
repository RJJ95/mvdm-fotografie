import React from "react";
import styled from "styled-components";

const FooterText = styled.p`
  text-transform: uppercase;
  color: grey;
  font-weight: 600;
  text-align: center;
`;

const Footer = () => (
  <FooterText>
    mail: marc@mvdmfotografie.nl <br /> tel: +31 6 5240 6337
  </FooterText>
);

export default Footer;
