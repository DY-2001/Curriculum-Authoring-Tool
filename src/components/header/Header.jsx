import styles from "./Header.module.css";
import React, { useState } from "react";
import Line from "../line/Line";

const Header = () => {
  const [subject, setSubject] = useState("MATHEMATICS");
  return (
    <div className={styles["headerContainer"]}>
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className={styles["subjectInput"]}
      />
      <Line />
      <div className={styles['subHeader']}>
        <div className={styles['actionContainer']}>
            <p>Action</p>
            <p>Move, Indent,</p>
            <p>Outdent, Delete</p>
        </div>
        <div className={styles['actionContainer']}>
            <p>Standard</p>
            <p>The Text of the standard</p>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default Header;
