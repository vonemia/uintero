import React from "react";
import styles from "./AboutUs.module.css";

function SpecializationCard({ iconSrc, title, description, isFirst }) {
  const cardClassName = isFirst
    ? styles.specializationCard
    : `${styles.specializationCard} ${styles.specializationCardMargin}`;

  return (
    <article className={cardClassName}>
      <div className={styles.iconContainer}>
        <img
          src={iconSrc}
          alt="Specialization icon"
          className={styles.specializationIcon}
        />
      </div>
      <h3 className={styles.specializationTitle}>{title}</h3>
      <p className={styles.specializationDescription}>{description}</p>
    </article>
  );
}

export default SpecializationCard;
