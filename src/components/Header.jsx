import React from "react";
import styles from "./Main2.module.css";
import interoLogo from "./-INTERO.svg";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e09de0b0a2f51c2aee18e6fc989b3892bba53aaf679823cdbbab94e305d7cab?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          alt="Company logo"
          className={styles.img2}
        />
        <img
          src={interoLogo}
          alt="INTERO logo"
          className={styles.interoLogo} // Add a new class for styling if needed
        />
      </div>
      <nav className={styles.autoLayoutHorizontal}>
        <a href="#" className={styles.property1DefaultLineon}>
          Главная
        </a>
        <a href="#" className={styles.property1DefaultLineoff}>
          О компании
        </a>
        <a href="#" className={styles.property1DefaultLineoff2}>
          Услуги
        </a>
        <a href="#" className={styles.property1DefaultLineoff3}>
          Кейсы
        </a>
        <a href="#" className={styles.property1DefaultLineoff4}>
          Блог
        </a>
        <a href="#" className={styles.property1DefaultLineoff5}>
          Контакты
        </a>
        <a href="#" className={styles.property1DefaultLineoff6}>
          Контакты
        </a>
        <button className={styles.autoLayoutHorizontal2}>ҚАЗ</button>
        <button className={styles.autoLayoutHorizontal3}>РУС</button>
        <button className={styles.autoLayoutHorizontal4}>ENG</button>
      </nav>
    </header>
  );
}

export default Header;
