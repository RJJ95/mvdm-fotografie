import React from "react";
import ReactModal from "react-modal";

import "./modal-styles.css";

ReactModal.setAppElement("#root");

const style = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  content: {
    position: "absolute",
    bottom: "0px",
    border: "none",
    margin: "auto",
    boxshadow: "0 4px 8px -2px rgba(48,49,51,0.12)",
    background: "none",
    textAlign: "center",
    top: "0px",
    width: "fit-content",
  },
};

const onAfterOpen = () => (document.body.style.overflow = "hidden");

const onAfterClose = () => (document.body.style.overflow = "unset");

const Modal = ({ isOpen, closeModal, children }) => {
  return (
    <ReactModal
      onAfterOpen={onAfterOpen}
      onAfterClose={onAfterClose}
      closeTimeoutMS={200}
      style={style}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
