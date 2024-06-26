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

          <img
            src="./images/close.png"
            onClick={() => {
              setIsModalOpen(false);
              setInputValue("");
            }}
            className={styles["close"]}
          />
        </div>
        <div className={styles["modalBody"]}>
          {modalType === "standard" ? (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              placeholder="Enter the standard name"
              className={styles["inputField"]}
            />
          ) : (
            <p className={styles["deleteTag"]}>
              Are you sure you want to delete this?
            </p>
          )}
        </div>
        <div className={styles["modalFooter"]}>
          <button
            className={styles["actionButton"]}
            onClick={() => {
              setIsModalOpen(false);
              setInputValue("");
            }}
          >
            Cancel
          </button>
          <button className={styles["actionButton"]} onClick={handleSubmit}>
            {modalType === "delete" ? "Delete" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
