import styles from "./ParticularTopic.module.css";
import Line from "../line/Line";
const ParticularTopic = () => {
  return (
    <div className={styles["topicStyles"]}>
      <div className={styles["topicActionAndName"]}>
        <div className={styles["actionContainer"]}>
            <img src="/images/move.png" title="move" className={styles["actionIcon"]} />
            <img src="/images/back.png" title="outdend" className={styles["actionIcon"]} />
            <img src="/images/next.png" title="indent" className={styles["actionIcon"]} />
            <img src="/images/bin.png" title="delete" className={styles["actionIcon"]} />
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
