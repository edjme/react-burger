import modalOverlayStyles from "./modalOverlay.module.css";
import PropTypes from "prop-types";

export const ModalOverlay = (props) => {
  return (
    <div className={modalOverlayStyles.overlay} onClick={props.closing}></div>
  );
};

ModalOverlay.propTypes = {
  closing: PropTypes.func.isRequired,
};

export default ModalOverlay;
