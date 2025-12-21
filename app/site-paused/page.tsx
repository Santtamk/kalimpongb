import React from "react";
import styles from "./page.module.css";

export default function SitePaused() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Site Under Construction</h1>
      <p className={styles.description}>
        This site is currently under construction. Please check back soon.
      </p>
    </div>
  );
}
