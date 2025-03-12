import React from "react";
import styles from "./Cases.module.css";

function CaseRow({ images, className }) {
  const rowClassName = className || styles.autoLayoutHorizontal4;

  return (
    <div className={rowClassName}>
      <img src={images.image1} alt="Case study" className={styles.img2} />
      <img src={images.image2} alt="Case study" className={styles.img3} />
      <img src={images.image3} alt="Case study" className={styles.img4} />
      <img
        src={images.overlayImage}
        alt="Overlay decoration"
        className={styles.img5}
      />
    </div>
  );
}

export default CaseRow;
