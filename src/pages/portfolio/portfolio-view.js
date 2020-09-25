import React, { useState } from "react";

// Components
import ZoomedImage from "../../components/constructs/zoomed-image";

// Content
import { sportPhotos } from "./content";

// Styles
import {
  Wrapper,
  ImageColumn,
  ImageContainer,
  PortfolioImage,
  Overlay,
} from "./portfolio-styles";

const Portfolio = ({ path }) => {
  const [zoomedImage, setZoomedImage] = useState(null);
  return (
    <Wrapper>
      {zoomedImage && (
        <ZoomedImage
          image={zoomedImage}
          cancelZoom={() => setZoomedImage(null)}
        />
      )}
      {sportPhotos.map((photos) => (
        <ImageColumn>
          {photos.map((photo) => (
            <ImageContainer>
              <PortfolioImage
                effect="blur"
                src={photo}
                onClick={() => setZoomedImage(photo)}
              />
              <Overlay onClick={() => setZoomedImage(photo)} />
            </ImageContainer>
          ))}
        </ImageColumn>
      ))}
    </Wrapper>
  );
};

export default Portfolio;
