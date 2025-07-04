import React from "react";
import styles from "./header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headText}>
        <div className={styles.logo}>quiz game</div>
        <div className={styles.sections}>
          <div className={styles.text}>Log In</div>
          <div className={styles.text}>Settings</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
