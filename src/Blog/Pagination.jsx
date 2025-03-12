"use client";
import React, { useState } from "react";
import styles from "./Blog.module.css";

function Pagination() {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav className={styles.pages} aria-label="Pagination">
      <button className={styles.div16} aria-label="Previous page">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73444899ea85fadbebb74648eea52b2f22b328fa364fee08ad5561a3d24bbf49?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          alt="Previous page"
          className={styles.img14}
        />
      </button>

      <button
        className={activePage === 1 ? styles.css1 : styles.css2}
        onClick={() => handlePageClick(1)}
        aria-current={activePage === 1 ? "page" : undefined}
      >
        1
      </button>

      <button
        className={activePage === 2 ? styles.css1 : styles.css2}
        onClick={() => handlePageClick(2)}
        aria-current={activePage === 2 ? "page" : undefined}
      >
        2
      </button>

      <button
        className={activePage === 3 ? styles.css1 : styles.css3}
        onClick={() => handlePageClick(3)}
        aria-current={activePage === 3 ? "page" : undefined}
      >
        3
      </button>

      <span className={styles.div17}>...</span>

      <button
        className={activePage === 17 ? styles.css1 : styles.css17}
        onClick={() => handlePageClick(17)}
        aria-current={activePage === 17 ? "page" : undefined}
      >
        17
      </button>

      <button className={styles.div18} aria-label="Next page">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e324c34e73f5ffd2d7f6376af06c96890bb7a6fb5661763d4dc6b6bfd441ea3e?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          alt="Next page"
          className={styles.img15}
        />
      </button>
    </nav>
  );
}

export default Pagination;
