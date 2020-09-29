import styled from "styled-components";
import { ReactComponent as Close } from "../../../assets/icons/close.svg";
import { breakpoints } from "../../../config/break-points";

export const ImageContainer = styled.div`
  padding-top: 60px;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
`;

export const CloseIcon = styled(Close)`
  fill: lightgray;
  width: 40px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  right: -50px;
  top: 15px;
  ${breakpoints("top", "px", [{ 425: "0" }, { 375: "0" }, { 320: "0" }])};
  ${breakpoints("right", "", [
    { 425: "calc(50% - 20px)" },
    { 375: "calc(50% - 20px)" },
    { 320: "calc(50% - 20px)" },
  ])};
`;
