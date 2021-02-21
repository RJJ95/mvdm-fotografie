import styled from "styled-components";

// Components
import Column from "../../components/primitives/column";
import Row from "../../components/primitives/row";

// config
import { breakpoints } from "../../config/break-points";

export const Wrapper = styled(Row)`
  ${breakpoints("flex-direction", "", [
    { 425: "column" },
    { 375: "column" },
    { 320: "column" },
  ])};
`;

export const ImageColumn = styled(Column)`
  padding-right: 3px;
`;

export const ImageContainer = styled.div`
  position: relative;
`;
