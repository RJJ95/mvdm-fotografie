import React, { useEffect } from "react";

// Components
import Image from "../../components/primitives/image";

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
  Wrapper,
} from "./portfolio-styles";

const Portfolio = ({ category }) => {

  useEffect(() => {
    scrollToTop();
  });

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
      {getContentArray().map((photos, i) => (
        <ImageColumn key={i}>
          {photos.map((photo, i) => (
            <ImageContainer key={i}>
              <Image effect="blur" src={photo} />
            </ImageContainer>
          ))}
        </ImageColumn>
      ))}
    </Wrapper>
  );
};

export default Portfolio;
