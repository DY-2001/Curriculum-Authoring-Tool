import React from "react";
import styles from "./ParticularTopic.module.css";
import classNames from "classnames";
import Line from "../line/Line";
import Modal from "../modal/Modal";

const ParticularTopic = ({ topicName, topicHierarchy }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  let className = "";
  if (topicHierarchy === "2") {
    className = styles.subTopicStyles;
  } else if (topicHierarchy === "3") {
    className = styles.subSubTopicStyles;
  }

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
            />
            <img
              src="/images/next.png"
              title="indent"
              className={styles["actionIcon"]}
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
                [styles["subTopicStyles"]]: topicHierarchy === "2",
                [styles["subSubTopicStyles"]]: topicHierarchy === "3",
              })}
            >
              {topicName}
            </p>
          </div>
        </div>
        <Line />
      </div>
      <Modal
        isModalOpen={isModalOpen}
        modalType="delete"
        modalHeader="Delete this topic"
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default ParticularTopic;
