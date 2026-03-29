import React from "react";
import style from "./style.module.scss";

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className={style["modal-overlay"]}>
      <div className={style["modal-content"]}>
        <span className={style["close-btn"]} onClick={onClose}>
          &times;
        </span>
        <h2>Modal Title</h2>
        <p>This is a custom modal created using React and CSS.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
