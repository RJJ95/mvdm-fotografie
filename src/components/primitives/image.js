import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Image = styled(LazyLoadImage)`
  max-width: 100%;
  height: auto;
`;

export default Image;
