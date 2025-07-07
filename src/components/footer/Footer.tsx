import React from "react";
import styles from "./footer.module.css";
const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sections}>
        <div className={styles.text}>@created by </div>
        <a
          href="https://github.com/RostyslavNaumenko"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Rostyslav Naumenko
        </a>
      </div>
    </div>
  );
};

export default Footer;
