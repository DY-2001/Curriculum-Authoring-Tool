import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = ({
  isModalOpen,
  topicsData,
  modalType,
  modalHeader,
  setIsModalOpen,
  insertNode,
}) => {
  const [inputValue, setInputValue] = useState("");
  if (!isModalOpen) {
    return null;
  }

  const handleSubmit = () => {
    if (modalType === "standard") {
      insertNode(topicsData, inputValue);
      setInputValue("");
    } else if (modalType === "delete") {
      console.log("delete");
    }
    setIsModalOpen(false);
  };

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
          <button onClick={handleSubmit}>
            {modalType === "delete" ? "Delete" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
