"use client";
import React from "react";
import styles from "./Blog.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d733948816e3e95c9c1d1ae3b59c214654ddd3872e24898650e89930826b3c7?placeholderIfAbsent=true&apiKey=99ab08febfcc452c8fe9a36a7cf4a377"
          alt="Company Logo"
          className={styles.logoImage}
        />
      </div>
      <nav className={styles.navMenu}>
        <a href="#" className={styles.navItem}>
          Главная
        </a>
        <a href="#" className={styles.navItemSimple}>
          О компании
        </a>
        <a href="#" className={styles.navItem}>
          Услуги
        </a>
        <a href="#" className={styles.navItem}>
          Кейсы
        </a>
        <a href="#" className={styles.navItemActive}>
          Блог
        </a>
        <a href="#" className={styles.navItem}>
          Контакты
        </a>
        <button className={styles.langActive}>РУС</button>
        <button className={styles.langInactive}>ENG</button>
      </nav>
    </header>
  );
}

export default Header;
