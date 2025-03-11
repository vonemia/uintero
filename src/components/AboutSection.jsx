import React from "react";
import styles from "./Main2.module.css";

function AboutSection() {
  return (
    <section className={styles.autoLayoutHorizontal6}>
      <h2 className={styles.div24}>О нас</h2>
      <div className={styles.autoLayoutVertical5}>
        <div className={styles.autoLayoutHorizontal7}>
          <span className={styles.normalText}>
            Компания объединяет команду экспертов{" "}
          </span>
          <span className={styles.boldText}>
            с более чем 15-летним опытом в сфере комплаенса
          </span>
          <span className={styles.normalText}>
            , оценки благонадёжности и управления корпоративными рисками.
            Специалисты обладают международными сертификациями, включая ISO
            37001, ICA (International Compliance Association), а также глубокими
            знаниями в области противодействия коррупции, управления конфликтом
            интересов, санкционных режимов и корпоративного обучения.
          </span>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
