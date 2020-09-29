import styled from "styled-components";
import MenuItem from "../../primitives/menu-item";

import Column from "../../primitives/column";
import Row from "../../primitives/row";

import { breakpoints } from "../../../config/break-points";

export const Wrapper = styled(Column)`
  width: 90%;
  margin: 0 auto;
`;

export const Header = styled(MenuItem)`
  font-size: 54px;
`;

export const HeaderContainer = styled.div`
  padding: 50px 0;
`;

export const BodyContainer = styled(Row)`
  ${breakpoints("flex-direction", "", [
    { 425: "column" },
    { 375: "column" },
    { 320: "column" },
  ])};
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 10px;
`;
