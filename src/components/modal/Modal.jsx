import React, { useState, useContext } from "react";
import styles from "./Modal.module.css";
import useTreeOperations from "../../hooks/useTreeOperations";
import { TopicContext } from "../../App";
const Modal = ({
  modalType,
  isModalOpen,
  modalHeader,
  subTopicsDataId,
  setIsModalOpen,
}) => {
  const [inputValue, setInputValue] = useState("");
  const { insertNode, deleteNode } = useTreeOperations();
  const { topicsData, setTopicsData } = useContext(TopicContext);

  if (!isModalOpen) {
    return null;
  }

  const handleSubmit = () => {
    const treeData = { ...topicsData };
    if (modalType === "standard") {
      let newTreeData = insertNode(treeData, treeData, inputValue);
      setTopicsData(newTreeData);
      setInputValue("");
    } else if (modalType === "delete") {
      let newTreeData = deleteNode(treeData, treeData, subTopicsDataId);
      setTopicsData(newTreeData);
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
