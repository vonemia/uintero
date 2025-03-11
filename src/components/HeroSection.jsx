import React from "react";
import styles from "./Main2.module.css";

function HeroSection() {
  return (
    <section className={styles.div2}>
      <h1 className={styles.div3}>
        Проверим контрагента – защитим ваш бизнес!
      </h1>
      <div className={styles.divNumberoids}>
        <div className={styles.statItem}>
          <p className={styles.css54}>54</p>
          <p className={styles.div5}>клиента</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.css3500}>3 500</p>
          <p className={styles.div6}>проверенных контрагентов</p>
        </div>
        <div className={styles.statItem}>
          <p className={styles.css30}>30%</p>
          <p className={styles.c}>cнижение рисков компании</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
