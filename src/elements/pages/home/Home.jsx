import React from "react";
import styles from "./Home.module.css";
import Header from "../../components/header/Header";

const Home = () => {
    return (
        <div className={styles['curriculumContainer']}>
            <Header />
        </div>
    );
}

export default Home;