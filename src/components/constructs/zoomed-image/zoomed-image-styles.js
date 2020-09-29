import styled from "styled-components";
import { ReactComponent as Close } from "../../../assets/icons/close.svg";
import { breakpoints } from "../../../config/break-points";

export const ImageContainer = styled.div`
padding-top: 30px;
  width: 90%;
  margin: 0 auto;
  position: relative;
`;

export const CloseIcon = styled(Close)`
  fill: black;
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  right: -50px;
  top: -30px;
  ${breakpoints("top", "px", [
    { 425: "-30" },
    { 375: "-30" },
    { 320: "-30" },
  ])};
  ${breakpoints("right", "", [
    { 425: "calc(50% - 20px)" },
    { 375: "calc(50% - 20px)" },
    { 320: "calc(50% - 20px)" },
  ])};
`;
