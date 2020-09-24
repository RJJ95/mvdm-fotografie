import React from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { sportPhotos } from "./content";

// Styles
const Image = styled(LazyLoadImage)`
  max-width: 500px;
  height: auto;
  cursor: pointer;
  background-color: black;
  transition: opacity 0.5s;

  :hover {
    opacity: 0.5;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1010px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 99%;
  width: 100%;
  opacity: 0;
  transition: 300ms ease;
  background-color: black;
  cursor: pointer;

  :hover {
    opacity: 0.6;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const Portfolio = ({ path }) => {
  return (
    <Wrapper>
      {sportPhotos.map((photos) => (
        <Column>
          {photos.map((photo) => (
            <ImageContainer>
              <Image effect="blur" src={photo} />
              <Overlay />
            </ImageContainer>
          ))}
        </Column>
      ))}
    </Wrapper>
  );
};

export default Portfolio;
