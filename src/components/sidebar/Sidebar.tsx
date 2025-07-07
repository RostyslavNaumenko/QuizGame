import React from "react";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Players</div>
      <div className={styles.button}>
        <button>+ add player</button>
      </div>
    </div>
  );
};

export default Sidebar;
