import React, { useState } from "react";

// Components
import ZoomedImage from "../../components/constructs/zoomed-image";
import Row from "../../components/primitives/row";

import {
  concert,
  natuur,
  portret,
  sport,
  stilleven,
  uitvaart,
  zwartwit,
} from "./content";

// Styles
import {
  ImageColumn,
  ImageContainer,
  PortfolioImage,
  Overlay,
} from "./portfolio-styles";

const Portfolio = ({ category }) => {
  const [zoomedImage, setZoomedImage] = useState(null);

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
    <Row>
      {zoomedImage && (
        <ZoomedImage
          image={zoomedImage}
          cancelZoom={() => setZoomedImage(null)}
        />
      )}
      {getContentArray().map((photos) => (
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
    </Row>
  );
};

export default Portfolio;
