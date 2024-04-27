import styles from "./ParticularTopic.module.css";
import Line from "../line/Line";
const ParticularTopic = () => {
  return (
    <div className={styles["topicStyles"]}>
      <div className={styles["topicActionAndName"]}>
        <div className={styles["actionContainer"]}>
            <img src="/images/move.png" className={styles["actionIcon"]} />
            <img src="/images/back.png" className={styles["actionIcon"]} />
            <img src="/images/next.png" className={styles["actionIcon"]} />
            <img src="/images/bin.png" className={styles["actionIcon"]} />
        </div>
        <div className={styles["actionContainer"]}>
          <p>Standard</p>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default ParticularTopic;
