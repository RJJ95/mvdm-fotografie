import styled from "styled-components";
import { breakpoints } from "../../config/break-points";
import Row from "../../components/primitives/row";

export const Paragraph = styled.p`
  max-width: 450px;
  margin-top: 0;
  margin-right: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 600;
`;

export const Wrapper = styled(Row)`
  ${breakpoints("flex-direction", "", [
    { 425: "column" },
    { 375: "column" },
    { 320: "column" },
  ])};
`;