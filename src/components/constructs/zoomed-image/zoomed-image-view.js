import React from "react";

import Modal from "../../primitives/modal";

import { Image } from "./zoomed-image-style";

const ZoomedImage = ({ image, cancelZoom }) => (
  <Modal closeModal={cancelZoom} isOpen={image}>
    <Image src={image} onClick={cancelZoom} />
  </Modal>
);

export default ZoomedImage;
