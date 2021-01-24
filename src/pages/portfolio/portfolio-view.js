import React, { useState, useEffect } from "react";

// Components
import ZoomedImage from "../../components/constructs/zoomed-image";

// Content
import {
  concert,
  natuur,
  portret,
  sport,
  stilleven,
  uitvaart,
  zwartwit,
} from "./content";

// Tools
import { scrollToTop } from "../../tools/scrollToTop";

// Styles
import {
  ImageColumn,
  ImageContainer,
  PortfolioImage,
  Overlay,
  Wrapper,
} from "./portfolio-styles";

const Portfolio = ({ category }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    scrollToTop()
  })

  function getContentArray() {
    switch (category) {
      case "concert":
        return concert;
      case "natuur":
        return natuur;
      case "portret":
        return portret;
      case "sport":
        return sport;
      case "stilleven":
        return stilleven;
      case "uitvaart":
        return uitvaart;
      case "zwartwit":
        return zwartwit;
      default:
        return concert;
    }
  }

  return (
    <Wrapper>
      {zoomedImage && (
        <ZoomedImage
          image={zoomedImage}
          cancelZoom={() => setZoomedImage(null)}
        />
      )}
      {getContentArray().map((photos, i) => (
        <ImageColumn key={i}>
          {photos.map((photo, i) => (
            <ImageContainer key={i}>
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
