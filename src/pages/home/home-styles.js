import styled from "styled-components";

import Row from "../../components/primitives/row";
import Column from "../../components/primitives/column";

import { breakpoints } from "../../config/break-points";

export const ParagraphRow = styled(Row)`
  padding: 10px 20px;
  justify-content: space-between;
  ${breakpoints("flex-direction", "", [
    { 425: "column" },
    { 375: "column" },
    { 320: "column" },
  ])};
`;

export const Wrapper = styled(Column)`
  max-width: 1000px;
`;

export const Paragraph = styled.p`
  max-width: 450px;
`;
