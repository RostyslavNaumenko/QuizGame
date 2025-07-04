import React from "react";
import styles from "./footer.module.css";
const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sections}>
        <div className={styles.text}>@created by </div>
        <div className={styles.link}>Rostyslav Naumenko</div>
      </div>
    </div>
  );
};

export default Footer;
