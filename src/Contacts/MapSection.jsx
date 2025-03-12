import React from "react";
import styles from "./Contacts.module.css";

function MapSection() {
  return (
    <div className={styles.div5}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/25f167fb15da2ff60eabc813f874ef6e4d5b13ce4048636ce7f4f1746a366cee?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        className={styles.img5}
        alt="Map background"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/46b70061890dd3a5726751241aebb465778a123e76c1b1806c4d13c0dffe75a0?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        className={styles.img6}
        alt="Map marker"
      />
    </div>
  );
}

export default MapSection;
