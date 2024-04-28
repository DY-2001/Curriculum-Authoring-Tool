import React, { useContext, useState } from "react";
import styles from "./Home.module.css";
import Header from "../header/Header";
import Topic from "../topic/Topic";
import Modal from "../modal/Modal";
import { TopicContext } from "../../App";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { topicsData } = useContext(TopicContext);
  const { dragItemId, setDragItemId } = useState(null);

  return (
    <>
      <div className={styles["curriculumContainer"]}>
        <Header />
        <Topic
          subTopicsData={topicsData}
          dragItemId={dragItemId}
          setDragItemId={setDragItemId}
        />
        <button
          onClick={() => setIsModalOpen(true)}
          className={styles["addButton"]}
        >
          <img src="/images/plus.png" className={styles["plusIcon"]} />
          Add a standard
        </button>
      </div>
      <Modal
        modalType="standard"
        subTopicsDataId={null}
        isModalOpen={isModalOpen}
        modalHeader="Add a standard"
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default Home;
