import React from "react";
import styles from "./Home.module.css";
import Header from "../header/Header";
import Topic from "../topic/Topic";

const Home = (props) => {
  const { topicsData, setTopicsData } = props;
  return (
    <div className={styles["curriculumContainer"]}>
      <Header />
      <Topic topicsData={topicsData} />
      <button onClick={() => null} className={styles["addButton"]}>
        <img src="/images/plus.png" className={styles["plusIcon"]} />
        Add a standard
      </button>
    </div>
  );
};

export default Home;
