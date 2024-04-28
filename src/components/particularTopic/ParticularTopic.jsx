import React, { useContext } from "react";
import styles from "./ParticularTopic.module.css";
import classNames from "classnames";
import Line from "../line/Line";
import Modal from "../modal/Modal";
import { TopicContext } from "../../App";
import useTreeOperations from "../../hooks/useTreeOperations";

const ParticularTopic = ({ subTopicsData }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const { topicsData, setTopicsData } = useContext(TopicContext);
  const { indentNode, outdentNode } = useTreeOperations();

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
    console.log("dushyantist new tree data", newTreeData)
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

  return (
    <>
      <div className={styles["topicStyles"]}>
        <div className={styles["topicActionAndName"]}>
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
            <p
              className={classNames(styles["mainTopicStyles"], {
                [styles["subTopicStyles"]]:
                  subTopicsData.topicHierarchy === "2",
                [styles["subSubTopicStyles"]]:
                  subTopicsData.topicHierarchy === "3",
              })}
            >
              {subTopicsData.topicName}
            </p>
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
