import { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyles from "./modal.module.css";
import PropTypes from "prop-types";
import ModalOverlay from "../modalOverlay/modalOverlay";

const modalRoot = document.getElementById("react-modals");

const Modal = ({ onClose, ...props }) => {
  useEffect(() => {
    const closeWithEsc = (evt) => {
      if ((evt.key === "Escape") || (evt.key === "Esc")) {
        onClose();
      }
    };
    document.addEventListener("keyup", closeWithEsc);
    return () => document.removeEventListener("keydown", closeWithEsc);
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={modalStyles.modal}>
        <h2 className="text text_type_main-large ml-10 mt-15">{props.title}</h2>
        <button className={modalStyles.button} type="button">
          <CloseIcon type="primary" onClick={onClose} />
        </button>
        {props.children}
      </div>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.element,
};

export default Modal;
