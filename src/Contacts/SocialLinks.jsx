import React from "react";
import styles from "./Contacts.module.css";

function SocialLinks() {
  return (
    <div className={styles.social}>
      <a href="#" aria-label="Social media link">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/834a07998656a37b99665b67f68b8276e1d66989ee1bd0fb9abae6a6a6710228?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          className={styles.img2}
          alt="Social media icon"
        />
      </a>
      <a href="#" aria-label="Social media link">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dba13a1fcf91f8f77b6b3c9e10a35377bb447cf27147ded18aec4be2076c810a?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          className={styles.img3}
          alt="Social media icon"
        />
      </a>
      <a href="#" aria-label="Social media link">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/045a83803818ec0b70d85ba7cde05b8e19e0f40ec92dbf7924ab3330bfc0747e?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          className={styles.img4}
          alt="Social media icon"
        />
      </a>
    </div>
  );
}

export default SocialLinks;
