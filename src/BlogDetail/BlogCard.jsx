import React from "react";
import styles from "./Blog.module.css";

function BlogCard({ imageUrl, date, title, description }) {
  return (
    <article className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <time className={styles.cardDate}>{date}</time>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </article>
  );
}

export default BlogCard;
