import React from "react";
import styles from "./AboutUs.module.css";

function CompanyInfo() {
  return (
    <section className={styles.companyInfoSection}>
      <article className={styles.companyDescription}>
        <h2 className={styles.companyName}>U-Intero</h2>
        <p className={styles.companyText}>
          Компания объединяет команду экспертов с более чем 15-летним опытом в
          сфере комплаенса, оценки благонадёжности и управления корпоративными
          рисками. Специалисты обладают международными сертификациями, включая
          ISO 37001, ICA (International Compliance Association), а также
          глубокими знаниями в области противодействия коррупции, управления
          конфликтом интересов, санкционных режимов и корпоративного обучения.
          <br />
          Мы обеспечиваем комплексные решения для бизнеса, помогая компаниям
          соблюдать международные стандарты, минимизировать правовые и
          репутационные риски, а также выстраивать эффективные системы
          внутреннего контроля. Наш подход основан на практическом опыте,
          аналитических методах и актуальных мировых стандартах, что позволяет
          клиентам уверенно управлять рисками и принимать обоснованные решения.
        </p>
      </article>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/34191f947cc7d28c4b3299d40ea7ea8d7429ec3c3260cdd72479b900bbfcd98d?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
        alt="Company image"
        className={styles.companyImage}
      />
    </section>
  );
}

export default CompanyInfo;
