import React, { useState } from "react";
import styles from "./sidebar.module.css";
import { AddPlayer } from "../modalWindows/AddPlayer";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.header}>Players</div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => setIsModalOpen(true)}>
          + add player
        </button>
        <AddPlayer isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default Sidebar;
