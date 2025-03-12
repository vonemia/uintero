import React from "react";
import styles from "./Services.module.css";

function ServiceCard({
  title,
  description,
  imageSrc,
  imagePosition = "bottom",
}) {
  // Determine which style to use based on the card position in the list
  const getCardStyle = () => {
    if (imagePosition === "top") {
      return styles.autoLayoutVertical2;
    }
    return styles.autoLayoutVertical;
  };

  // Determine which image style to use based on the position
  const getImageStyle = () => {
    if (imagePosition === "top") {
      return styles.img3;
    }
    return styles.img2;
  };

  return (
    <article className={getCardStyle()}>
      <h2 className={styles.div4}>{title}</h2>

      <p className={styles.div5}>
        {description.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < description.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>

      <button className={styles.contentTextSizelargeTypeprimaryStatedefault}>
        Связаться с нами
      </button>

      <img src={imageSrc} alt={title} className={getImageStyle()} />
    </article>
  );
}

export default ServiceCard;
