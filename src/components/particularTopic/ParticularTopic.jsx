import React, { useContext } from "react";
import styles from "./ParticularTopic.module.css";
import classNames from "classnames";
import Line from "../line/Line";
import Modal from "../modal/Modal";
import { TopicContext } from "../../App";
import useTreeOperations from "../../hooks/useTreeOperations";

const ParticularTopic = ({ subTopicsData, dragItem, setDragItem }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { topicsData, setTopicsData } = useContext(TopicContext);
  const { indentNode, outdentNode, editNameNode, handleDragAndDrop } =
    useTreeOperations();
  const [inputNodeName, setInputNodeName] = React.useState(
    subTopicsData.topicName
  );

  if (subTopicsData.isHidden) {
    return null;
  }

  let className = "";
  if (subTopicsData.topicHierarchy === "2") {
    className = styles.subTopicStyles;
  } else if (subTopicsData.topicHierarchy === "3") {
    className = styles.subSubTopicStyles;
  }

  const handlIndentNode = () => {
    let TreeData = { ...topicsData };
    let newTreeData = indentNode(
      TreeData,
      subTopicsData.id,
      subTopicsData.topicHierarchy
    );
    setTopicsData(newTreeData);
  };

  const handleOutdentNode = () => {
    let TreeData = { ...topicsData };
    let newTreeData = outdentNode(
      TreeData,
      subTopicsData.id,
      subTopicsData.topicHierarchy
    );
    setTopicsData(newTreeData);
  };

  const handleNameNode = (value) => {
    setInputNodeName(value);
    let TreeData = { ...topicsData };
    let newTreeData = editNameNode(TreeData, subTopicsData.id, value);
    setTopicsData(newTreeData);
  };

  const handleDrag = () => {
    let draggedItem = {
      dragItemId: subTopicsData.id,
      dragItemHierarchy: subTopicsData.topicHierarchy,
    };
    setDragItem(draggedItem);
  };

  const handleDrop = (e, dropItemId, dropItemHierarchy) => {
    if (
      dragItem.dragItemId === dropItemId ||
      dragItem.dragItemHierarchy > dropItemHierarchy
    )
      return;
    let TreeData = { ...topicsData };
    let newTreeData = handleDragAndDrop(
      TreeData,
      dragItem.dragItemId,
      dropItemId
    );
    setTopicsData(newTreeData);
  };

  return (
    <>
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) =>
          handleDrop(e, subTopicsData.id, subTopicsData.topicHierarchy)
        }
        className={styles["topicStyles"]}
      >
        <div
          draggable={true}
          onDragStart={handleDrag}
          className={styles["topicActionAndName"]}
        >
          <div className={styles["actionContainer"]}>
            <img
              src="/images/move.png"
              title="move"
              className={styles["actionIcon"]}
            />
            <img
              src="/images/back.png"
              title="outdend"
              className={styles["actionIcon"]}
              onClick={handleOutdentNode}
            />
            <img
              src="/images/next.png"
              title="indent"
              className={styles["actionIcon"]}
              onClick={handlIndentNode}
            />
            <img
              src="/images/bin.png"
              title="delete"
              className={styles["actionIcon"]}
              onClick={() => {
                setIsModalOpen(true);
              }}
            />
          </div>
          <div className={styles["topicContainer"]}>
            <input
              type="text"
              value={inputNodeName}
              onChange={(e) => handleNameNode(e.target.value)}
              className={classNames(styles["mainTopicStyles"], {
                [styles["subTopicStyles"]]:
                  subTopicsData.topicHierarchy === "2",
                [styles["subSubTopicStyles"]]:
                  subTopicsData.topicHierarchy === "3",
              })}
              placeholder="Enter topic name..."
            />
          </div>
        </div>
        <Line />
      </div>
      <Modal
        modalType="delete"
        isModalOpen={isModalOpen}
        modalHeader="Delete this topic"
        subTopicsDataId={subTopicsData.id}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default ParticularTopic;
