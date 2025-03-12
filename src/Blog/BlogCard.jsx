import React from "react";
import styles from "./Blog.module.css";

function BlogCard({ image, date, title, description, className }) {
  // Determine which date style class to use based on the date
  let dateClassName;
  if (date === "12.02.2025") {
    dateClassName = styles.css12022025;
  } else if (date === "10.02.2025") {
    dateClassName = styles.css10022025;
  } else if (date === "8.02.2025") {
    dateClassName = styles.css8022025;
  }

  return (
    <article className={className}>
      <img src={image} alt={title} className={styles.img2} />
      <div className={styles.news3}>
        <time className={dateClassName}>{date}</time>
        <h2 className={styles.div4}>{title}</h2>
        <p className={styles.css50}>{description}</p>
      </div>
    </article>
  );
}

export default BlogCard;
