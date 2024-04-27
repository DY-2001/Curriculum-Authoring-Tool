import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({ isModalOpen, modalType, modalHeader, setIsModalOpen }) => {
  const [inputValue, setInputValue] = useState("");
  if (!isModalOpen) {
    return null;
  }
  return (
    <div className={styles["modalContainer"]}>
      <div className={styles["modalContent"]}>
        <div className={styles["modalHeader"]}>
          <h2>{modalHeader}</h2>
          <span
            onClick={() => setIsModalOpen(false)}
            className={styles["close"]}
          >
            X
          </span>
        </div>
        <div className={styles["modalBody"]}>
          {modalType === "standard" ? (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          ) : (
            <p>Are you sure you want to delete this?</p>
          )}
        </div>
        <div className={styles["modalFooter"]}>
          <button onClick={() => setIsModalOpen(false)}>Cancel</button>
          <button>{modalType === "delete" ? "Delete" : "Submit"}</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
