import React from "react";
import styles from "./Home.module.css";
import Header from "../header/Header";
import Topic from "../topic/Topic";
import Modal from "../modal/Modal";

const Home = (props) => {
  const { topicsData, setTopicsData } = props;
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleAddStandard = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <div className={styles["curriculumContainer"]}>
        <Header />
        <Topic topicsData={topicsData} />
        <button onClick={handleAddStandard} className={styles["addButton"]}>
          <img src="/images/plus.png" className={styles["plusIcon"]} />
          Add a standard
        </button>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        modalType="standard"
        modalHeader="Add a standard"
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default Home;
