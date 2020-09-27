import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Row from "../../components/primitives/row";
import Column from "../../components/primitives/column";

export const HeroImage = styled(LazyLoadImage)`
  max-width: 100%;
  height: auto;
`;

export const ParagraphRow = styled(Row)`
  padding: 10px 20px;
  justify-content: space-between;
`;

export const Wrapper = styled(Column)`
  max-width: 1000px;
`;

export const Paragraph = styled.p`
  max-width: 450px;
`;
