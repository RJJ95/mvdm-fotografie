import styled from "styled-components";

import { ReactComponent as Instagram } from "../../../assets/icons/instagram.svg";
import { ReactComponent as Facebook } from "../../../assets/icons/facebook.svg";

import Column from "../../primitives/column";

import { breakpoints } from "../../../config/break-points";

export const InstagramIcon = styled(Instagram)`
  cursor: pointer;
  width: 18px;
  height: 18px;
  margin-right: 10px;
  path {
    fill: grey !important;
  }
  :hover {
    path {
      fill: black !important;
    }
  }
`;

export const FacebookIcon = styled(Facebook)`
  cursor: pointer;
  width: 18px;
  height: 18px;
  path {
    fill: grey !important;
  }
  :hover {
    path {
      fill: black !important;
    }
  }
`;

export const Wrapper = styled(Column)`
  flex-basis: 15%;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

export const Notification = styled.div`
  text-transform: uppercase;
  margin-top: 30px;
  color: grey;
  font-weight: 600;
  padding-right: 20px;
  ${breakpoints("margin", "", [
    { 425: "30px auto" },
    { 375: "30px auto" },
    { 320: "30px auto" },
  ])};
`;
