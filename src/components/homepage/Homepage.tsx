import React from "react";
import styles from "./homePage.module.css";
import Sidebar from "../sidebar/Sidebar";

const Homepage: React.FC = () => {
  return (
    <div className={styles.content}>
      <Sidebar />
      <div>Home</div>
    </div>
  );
};

export default Homepage;
