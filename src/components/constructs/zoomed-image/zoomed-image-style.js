import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`;

export const Image = styled(LazyLoadImage)`
  z-index: 1000;
  max-height: 95vh;
`;
