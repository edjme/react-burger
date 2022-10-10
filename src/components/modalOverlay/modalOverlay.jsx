import React from "react";
import modalOverlayStyles from "./modalOverlay.module.css";

export const ModalOverlay = (props) => {
  return (
    <div className={modalOverlayStyles.overlay} onClick={props.onClose}></div>
  );
};

export default ModalOverlay;
