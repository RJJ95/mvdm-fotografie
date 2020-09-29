import React from "react";

import Modal from "../../primitives/modal";
import Image from "../../primitives/image";

import { ImageContainer, CloseIcon } from "./zoomed-image-styles";

const ZoomedImage = ({ image, cancelZoom }) => (
  <Modal closeModal={cancelZoom} isOpen={image}>
    <ImageContainer>
      <Image effect="blur" src={image} />
      <CloseIcon onClick={cancelZoom} />
    </ImageContainer>
  </Modal>
);

export default ZoomedImage;
