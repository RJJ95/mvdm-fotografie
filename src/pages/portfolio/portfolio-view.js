import React from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { sportImages } from "./content";

// Styles
const Image = styled(LazyLoadImage)`
  max-width: 462.5px;
  height: auto;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
`;

const Portfolio = ({ path }) => {
  return (
    <Wrapper>
      {sportImages.map((image) => (
        <Image alt="portfolio-image" src={image} effect="blur" />
      ))}
    </Wrapper>
  );
};

export default Portfolio;
