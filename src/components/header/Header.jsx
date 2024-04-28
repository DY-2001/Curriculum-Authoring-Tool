import styles from "./Header.module.css";
import React, { useContext, useState } from "react";
import Line from "../line/Line";
import { TopicContext } from "../../App";

const Header = () => {
  const [subject, setSubject] = useState("MATHEMATICS");
  const { topicsData } = useContext(TopicContext);

  const handleCreateData = (data) => {
    let newData = "Curriculum";
    for (let i = 0; i < data.subTopics.length; i++) {
      if (data.subTopics[i].isHidden === false) {
        newData = newData + "\n" + " " + data.subTopics[i].topicName;
      }
      let subData = data.subTopics[i];
      for (let j = 0; j < subData.subTopics.length; j++) {
        if (subData.subTopics[j].isHidden === false) {
          newData = newData + "\n" + "  " + subData.subTopics[j].topicName;
        }
        let subSubData = subData.subTopics[j];
        for (let k = 0; k < subSubData.subTopics.length; k++) {
          if (subSubData.subTopics[k].isHidden === false) {
            newData =
              newData + "\n" + "   " + subSubData.subTopics[k].topicName;
          }
        }
      }
    }
    return newData;
  };

  const handleSave = () => {
    let newData = handleCreateData(topicsData);
    const blob = new Blob([newData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "curriculum.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className={styles["headerContainer"]}>
      <div className={styles["mainHeader"]}>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={styles["subjectInput"]}
          placeholder="Enter the subject name..."
        />
        <div className={styles["loadAndSave"]}>
          <button className={styles["loadButton"]}>
            <input type="file" accept="application/json" />
            Load
          </button>

          <button onClick={handleSave} className={styles["saveButton"]}>
            Save
          </button>
        </div>
      </div>

      <Line />
      <div className={styles["subHeader"]}>
        <div className={styles["actionContainer"]}>
          <p className={styles["actionHeader"]}>Action</p>
          <p>Move, Indent,</p>
          <p>Outdent, Delete</p>
        </div>
        <div className={styles["standardContainer"]}>
          <p className={styles["actionHeader"]}>Standard</p>
          <p>The Text of the standard</p>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default Header;
