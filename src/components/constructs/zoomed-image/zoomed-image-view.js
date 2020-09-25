import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import Modal from "../../primitives/modal";

import { Image } from "./zoomed-image-style";

const ZoomedImage = ({ image, cancelZoom }) => (
  <Modal closeModal={cancelZoom} isOpen={image}>
    <Image effect="blur" src={image} onClick={cancelZoom} />
  </Modal>
);

export default ZoomedImage;
