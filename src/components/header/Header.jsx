import styles from "./Header.module.css";
import React, { useState } from "react";
import Line from "../line/Line";

const Header = () => {
  const [subject, setSubject] = useState("MATHEMATICS");
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
            <input
              type="file"
              accept="application/json"
            />
            Load
          </button>

          <button className={styles["saveButton"]}>Save</button>
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
