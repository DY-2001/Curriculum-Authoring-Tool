import React from "react";
import styles from "./Home.module.css";
import Header from "../header/Header";
import ParticularTopic from "../particularTopic/ParticularTopic";

const Home = (props) => {
  const { topics, setTopics } = props;
  return (
    <div className={styles["curriculumContainer"]}>
      <Header />
      {topics &&
        topics.map((topic, index) => {
          return <ParticularTopic />;
        })}
      <button className={styles["addButton"]}>
        <img src="/images/plus.png" className={styles["plusIcon"]} />
        Add a standard
      </button>
    </div>
  );
};

export default Home;
